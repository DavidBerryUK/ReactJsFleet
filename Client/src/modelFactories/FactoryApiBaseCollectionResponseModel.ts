import { IApiModel }                            from './../models/interfaces/IApiModel';
import ApiBaseCollectionResponseModel           from '../models/apiBase/ApiBaseCollectionResponseModel';

export default class FactoryApiBaseCollectionResponseModel<T extends IApiModel>  {
    
    public createFrom(obj: any): ApiBaseCollectionResponseModel<T> {
        const result = this.MapItem(obj);
        return result;
    }

    private MapItem(source: any): ApiBaseCollectionResponseModel<T> {

        if (source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if (source === null) {
            throw new Error('Source object can not be null');
        }

        const result = new ApiBaseCollectionResponseModel<T>();

        if ( source.entity !== undefined ) {
            source = source.entity;
        }

        /** Map a single object */
        // tslint:disable-next-line:forin
        for (const key in result) {
            const value = source[key];

            if (value !== undefined && !Array.isArray(value)) {
                (result as any)[key] = value;
            }
        }

        return result;
    }
}

