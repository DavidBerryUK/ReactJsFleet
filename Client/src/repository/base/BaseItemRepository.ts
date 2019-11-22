import { ApiResponseContract }          from './../apiContracts/ApiResponseContract';
import ApiBaseItemResponseModel         from "../../models/apiBase/ApiBaseItemResponseModel";

export default class BaseItemRepository<T> {

    public post(model : T) : ApiResponseContract<T> {

        const contract = new ApiResponseContract<T>();

        return contract;
    }
}