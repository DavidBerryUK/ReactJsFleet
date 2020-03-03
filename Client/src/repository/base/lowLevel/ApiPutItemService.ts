import { ApiResponse }                          from '../../apiContracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../apiContracts/ApiResponseContract';
import { IApiModel }                            from '../../../models/interfaces/IApiModel';
import { IModelFactory }                        from '../../../modelFactories/interfaces/IModelFactory';
import ApiBaseError                             from '../ApiBaseError';
import ApiBaseItemResponseModel                 from '../../../models/apiBase/ApiBaseItemResponseModel';
import axios                                    from 'axios';
import BaseApiConfig                            from '../ApiBaseConfig';
import ValidationMessage                        from '../../../models/validation/ValidationMessage';

export default class ApiPutItemService<T extends IApiModel> {

    public put(
        endpointUrl: string,
        modelFactory: IModelFactory<T>, 
        entityModel: T) : ApiResponse<ApiBaseItemResponseModel<T>> {

        let contract = new ApiResponseContract<ApiBaseItemResponseModel<T>>();

        axios
        .put(endpointUrl, entityModel, BaseApiConfig.baseConfig)
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
                    var model = new ApiBaseItemResponseModel<T>();
                    model.entity = modelFactory.createFrom(response.data.entity);
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
