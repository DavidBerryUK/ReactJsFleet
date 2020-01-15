import { ApiResponse }                          from "../../apiContracts/ApiResponseContract";
import { ApiResponseContract, }                 from "../../apiContracts/ApiResponseContract";
import { IApiModel }                            from "../../../models/interfaces/IApiModel";
import { IModelFactory }                        from "../../../modelFactories/interfaces/IModelFactory";
import ApiBaseCollectionResponseModel           from "../../../models/apiBase/ApiBaseCollectionResponseModel";
import ApiBaseError                             from "../ApiBaseError";
import axios                                    from 'axios';
import BaseApiConfig                            from "../ApiBaseConfig";
import ValidationMessage                        from "../../../models/validation/ValidationMessage";

export default class ApiGetService<T extends IApiModel> {
  public getList(
    endpointUrl: string,
    modelFactory: IModelFactory<T>
  ): ApiResponse<ApiBaseCollectionResponseModel<T>> {

    let contract = new ApiResponseContract<ApiBaseCollectionResponseModel<T>>();

    // console.log("getting list");
    // console.log(endpointUrl);

    axios
      .get(endpointUrl, BaseApiConfig.baseConfig)
      .then((response: any) => {
        console.log("axios - then");
        console.log(response);
        if (response.data == null) {
          contract.publishFailure("No data returned");
        } else {
          // console.log("axios - has response.data")
          if (response.data.hasValidationMessages) {
            console.log(
              "[under-development:BasePostService] response hasValidation messages"
            );
            if (response.data.validationMessages) {
              console.log(
                "[under-development:BasePostService] response validationMessages"
              );
              contract.publishValidationErrorsRaised(
                response.data.validationMessages
              );
            } else {
              console.log(
                "[under-development:BasePostService] response BlankArray validationMessages"
              );
              contract.publishValidationErrorsRaised(
                new Array<ValidationMessage>()
              );
            }

            return;
          }

          console.log('response.data.entities')
          console.log(response.data.entities);

          if (response.data.entities) {
            console.log("[under-development:BasePostService] response has data");
            const model = new ApiBaseCollectionResponseModel<T>();

            console.log("WORK (MAPPING) IS NEEDED");

            console.log(model);

            model.pageNumber = 0;
            model.totalPages = 0;
            model.rowsPerPage = 0;
            model.totalRows = 0;
            model.entities = modelFactory.createArrayFrom(response.data.entities);
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
