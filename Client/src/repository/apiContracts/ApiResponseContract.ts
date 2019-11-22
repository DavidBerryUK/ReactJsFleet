//
// To assist development of easy to use ApiRepositories,
// The contract helps 'hide' the complex code and allows, enforces
// isolation of low-level repository code, and allows
// the http communication framework to be replaced independently
// of the rest of the application

import ContractListener                         from './ContractListener';
import ValidationMessage                        from '../../models/validation/ValidationMessage';

type ICallBackOnFail = (error: string) => void;
type ICallBackSuccess<T> = (data: T) => void;
type ICallBackThen = () => void;
type ICallBackValidationErrors = (messages: ValidationMessage[]) => void;
type IHandlers<T> = (callbackHandles: ApiCallbackHandles<T>) => void;




/**
 * The contract listener allows the application it listen to
 * the results of 1, 2  or move api results and only act when
 * specific events have been raised on any or all of them.
 *
 * this is a very complex piece of code which deserves its own
 * tutorial.
 *
 * in summary any api request can attach itself to a contact listener.
 * When a api request finished, success, failure or other, the contract
 * listener is informed first, where it can decide to raise events such as
 * onAllSucceeded, onAllResponded, onSingleFailResponse
 *
 * @export
 * @class ApiContractListenerContract
 */
export class ApiContractListenerContract {

    public response: ApiResponse<any>;
    public contractListener: ContractListener;

    constructor(response: ApiResponse<any>, contractListener: ContractListener) {
        this.response = response;
        this.contractListener = contractListener;
        this.contractListener.registerContract();
    }
}


/**
 * This class records all the subscribers to a contract.
 * When a subscriber used the syntax 'onSuccess', a register
 * of the callback is stored in this class, ready for when
 * the low level api is ready to publish the event.
 *
 * Note that all callback as stored in an array as the developer
 * may wish to listen to the same event is different places.
 *
 * Also note the stored of immediateSuccess etc. This is for when
 * a message has been published, such as a success state, before
 * a subscriber has been registered. e.g.
 *
 *  api.save()
 *     .onSuccess(....)
 *     .onFailure(...)
 *
 * in this example the save command is executed immediately, then
 * control flow passed back to parsing the contract registration of
 * 'onSuccess' then 'onFailure'. Should the save raise a success before
 * the contract registration, then event will be stored and raised immediately
 * as soon as the registration is processed.
 *
 * @export
 * @class ApiCallbackHandles
 * @template T
 */
export class ApiCallbackHandles<T> {
    public immediateSuccess: T | null;
    public immediateValidationErrors: ValidationMessage[];
    public immediateLocked: T | null;
    public immediateFail: string;

    public callbackSuccess: Array<ICallBackSuccess<T>>;
    public callbackValidationErrors: ICallBackValidationErrors[];
    public callbackOnFail: ICallBackOnFail[];
    public callbackOnThen: ICallBackThen[];
    public listener: ApiContractListenerContract | null;


    constructor() {
        this.immediateSuccess = null;
        this.immediateLocked = null;
        this.immediateFail = '';
        this.immediateValidationErrors = new Array<ValidationMessage>();
        this.callbackSuccess = new Array<ICallBackSuccess<T>>();
        this.callbackValidationErrors = new Array<ICallBackValidationErrors>();
        this.callbackOnFail = new Array<ICallBackOnFail>();
        this.callbackOnThen = new Array<ICallBackThen>();
        this.listener = null;
    }
}

/**
 * This class is used to register events with the ApiCallbackHandles class.
 *
 * This is returned from the all the API modules to initiating
 * process. It also isolates the inner workings of the contracts as these
 * remain private in the ApiResponseContract which is never returned.
 *
 * Each method such as onSuccess or onFailure registers a message subscriber.
 *
 * Should an event have been raised before the subscriber have had opportunity
 * to register, that event will have been 'buffered' and be returned
 * immediately to the newly registered subscriber
 *
 * @export
 * @class ApiResponse
 * @template T
 */
export class ApiResponse<T> {

    public callbackHandles: ApiCallbackHandles<T>;

    /**
     * Creates an instance of ApiResponse.
     *
     * @param {IHandlers<T>} handlers
     * @memberof ApiResponse
     */
    constructor(handlers: IHandlers<T>) {
        this.callbackHandles = new ApiCallbackHandles<T>();
        handlers(this.callbackHandles);
    }

    /**
     *
     *
     * @param {ICallBackThen} callback
     * @returns {ApiResponse<T>}
     * @memberof ApiResponse
     */
    public then(callback: ICallBackThen): ApiResponse<T> {
        this.callbackHandles.callbackOnThen.push(callback);
        return this;
    }

    /**
     *
     *
     * @param {ICallBackSuccess<T>} callback
     * @returns {ApiResponse<T>}
     * @memberof ApiResponse
     */
    public onSuccess(callback: ICallBackSuccess<T>): ApiResponse<T> {

        this.callbackHandles.callbackSuccess.push(callback);

        if (this.callbackHandles.immediateSuccess) {

            if (this.callbackHandles.callbackSuccess) {
                this.callbackHandles.callbackSuccess.forEach((handler) => {
                    handler(this.callbackHandles.immediateSuccess as T);
                });
            }

            if (this.callbackHandles.listener) {
                this.callbackHandles.listener.contractListener.notifyCompletion(true);
            }
        }

        return this;
    }

    /**
     *
     *
     * @param {ICallBackValidationErrors} callback
     * @returns {ApiResponse<T>}
     * @memberof ApiResponse
     */
    public onValidationErrorsRaised(callback: ICallBackValidationErrors): ApiResponse<T> {

        this.callbackHandles.callbackValidationErrors.push(callback);

        if (this.callbackHandles.immediateValidationErrors) {

            this.callbackHandles.callbackValidationErrors.forEach((handler) => { handler(this.callbackHandles.immediateValidationErrors); });

            if (this.callbackHandles.listener) {
                this.callbackHandles.listener.contractListener.notifyCompletion(true);
            }
        }

        return this;
    }

    /**
     *
     *
     * @param {ICallBackOnFail} callback
     * @returns {ApiResponse<T>}
     * @memberof ApiResponse
     */
    public onFailed(callback: ICallBackOnFail): ApiResponse<T> {
        this.callbackHandles.callbackOnFail.push(callback);

        if (this.callbackHandles.immediateFail) {
            this.callbackHandles.callbackOnFail.forEach((handler) => { handler(this.callbackHandles.immediateFail); });

            if (this.callbackHandles.listener) {
                this.callbackHandles.listener.contractListener.notifyCompletion(false);
            }
        }

        return this;
    }

    /**
     *
     *
     * @param {ContractListener} callback
     * @returns {ApiResponse<T>}
     * @memberof ApiResponse
     */
    public contractListener(callback: ContractListener): ApiResponse<T> {
        this.callbackHandles.listener = new ApiContractListenerContract(this, callback);

        if (this.callbackHandles.immediateSuccess) {
            this.callbackHandles.listener.contractListener.notifyCompletion(true);
        }

        if (this.callbackHandles.immediateFail) {
            this.callbackHandles.listener.contractListener.notifyCompletion(false);
        }

        return this;
    }
}

/**
 * This is the main contract class and is created by the message publisher,
 * this is the low level API such as 'saveModelToRest' or 'loadListFromRest'.
 *
 * the publisher can then publish strongly typed messages such as
 *  'publishSuccess' or 'publishFailure'
 *
 * @export
 * @class ApiResponseContract
 * @template T
 */
export class ApiResponseContract<T>  {

    private response: ApiResponse<T>;
    private handers: ApiCallbackHandles<T> | undefined;

    constructor() {

        this.response = new ApiResponse<T>((handlers) => {
            this.handers = handlers;
        });
    }

    /**
     *
     *
     * @param {T} data
     * @memberof ApiResponseContract
     */
    public publishSuccess(data: T) {
        if (this.handers) {
            if (this.handers.callbackSuccess.length > 0) {
                this.handers.callbackSuccess.forEach((handler) => { handler(data); });
                this.publishThen();
            } else {
                this.handers.immediateSuccess = data;
            }
            if (this.handers.listener) {
                this.handers.listener.contractListener.notifyCompletion(true);
            }
        }
    }

    /**
     *
     *
     * @param {Array<ValidationMessage>} messages
     * @memberof ApiResponseContract
     */
    public publishValidationErrorsRaised(messages: ValidationMessage[]) {
        if (this.handers) {
            if (this.handers.callbackValidationErrors.length > 0) {
                this.handers.callbackValidationErrors.forEach((handler) => { handler(messages); });
                this.publishThen();
            } else {
                this.handers.immediateValidationErrors = messages;
            }
            if (this.handers.listener) {
                this.handers.listener.contractListener.notifyCompletion(true);
            }
        }
    }

    /**
     *
     *
     * @param {string} error
     * @memberof ApiResponseContract
     */
    public publishFailure(error: string) {
        if (this.handers) {
            if (this.handers.callbackOnFail.length > 0) {
                this.handers.callbackOnFail.forEach((handler) => { handler(error); });
                this.publishThen();
            } else {
                this.handers.immediateFail = error;
            }
            if (this.handers.listener) {
                this.handers.listener.contractListener.notifyCompletion(false);
            }
        }
    }

    /**
     *
     *
     * @memberof ApiResponseContract
     */
    public publishThen() {
        if (this.handers && this.handers.callbackOnThen) {
            this.handers.callbackOnThen.forEach((handler) => { handler(); });
        }
    }

    /**
     *
     *
     * @readonly
     * @type {ApiResponse<T>}
     * @memberof ApiResponseContract
     */
    get responder(): ApiResponse<T> {
        return this.response;
    }
}
