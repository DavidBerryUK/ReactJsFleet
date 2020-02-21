import { ApiResponse }                          from "../../apiContracts/ApiResponseContract";
import { ApiResponseContract, }                 from "../../apiContracts/ApiResponseContract";
import { IApiModel }                            from "../../../models/interfaces/IApiModel";
import { IModelFactory }                        from "../../../modelFactories/interfaces/IModelFactory";
import ApiBaseError                             from "../ApiBaseError";
import ApiBaseItemResponseModel                 from "../../../models/apiBase/ApiBaseItemResponseModel";
import axios                                    from 'axios';
import BaseApiConfig                            from "../ApiBaseConfig";
import ValidationMessage                        from "../../../models/validation/ValidationMessage";

export default class ApiGetItemService<T extends IApiModel> {
  public getItem(
    endpointUrl: string,
    modelFactory: IModelFactory<T>
  ): ApiResponse<ApiBaseItemResponseModel<T>> {

    let contract = new ApiResponseContract<ApiBaseItemResponseModel<T>>();

    axios
      .get(endpointUrl, BaseApiConfig.baseConfig)
      .then((response: any) => {        
        if (response.data == null) {
          contract.publishFailure("No data returned");
        } else {          
          if (response.data.hasValidationMessages) {
            // console.log(
            //   "[under-development:BasePostService] response hasValidation messages"
            // );
            if (response.data.validationMessages) {
              // console.log(
              //   "[under-development:BasePostService] response validationMessages"
              // );
              contract.publishValidationErrorsRaised(
                response.data.validationMessages
              );
            } else {
              // console.log(
              //   "[under-development:BasePostService] response BlankArray validationMessages"
              // );
              contract.publishValidationErrorsRaised(
                new Array<ValidationMessage>()
              );
            }

            return;
          }

          // console.log('response.data.entities')
          // console.log(response.data.entities);

          if (response.data.entity) {
            // console.log("[under-development:BasePostService] response has data");
        
            var model = new ApiBaseItemResponseModel<T>();
            model.entity = modelFactory.createFrom(response.data.entity);

            contract.publishSuccess(model);
          } else {
            // console.log("data has no entity")
            contract.publishFailure("No data entity returned");
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
