import { IApiModel }                            from '../../../models/interfaces/IApiModel';
import { ApiResponse }                          from '../../apiContracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../apiContracts/ApiResponseContract';
import { IModelFactory }                        from '../../../modelFactories/interfaces/IModelFactory';
import ApiBaseError                             from '../ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from '../ApiBaseConfig';
import ValidationMessage                        from '../../../models/validation/ValidationMessage';

export default class ApiPostService<T extends IApiModel> {

    public post(
        endpointUrl: string,
        modelFactory: IModelFactory<T>, 
        entityModel: T) : ApiResponse<T> {

        let contract = new ApiResponseContract<T>();
        axios
        .post(endpointUrl, entityModel, BaseApiConfig.baseConfig)
        .then((response : any) => {
            if (response.data == null) {
                contract.publishFailure('No data returned');
            } else {
                if (response.data.hasValidationMessages) {
                    if (response.data.validationMessages) {     
                        contract.publishValidationErrorsRaised(response.data.validationMessages);
                    } else {
                        contract.publishValidationErrorsRaised(new Array<ValidationMessage>());
                    }
                    return;
                }


                if (response.data.entity) {
                    const model = modelFactory.createFrom(response.data.entity);
                    contract.publishSuccess(model);
                } else {
                    contract.publishFailure('No data entity returned');
                }

            }
        })
        .catch((error: string) => {
            ApiBaseError.handleErrorResponse(error);
            contract.publishFailure(error);
        });

        return contract.responder;
    }
}
