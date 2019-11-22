import { IApiModel }                            from './../models/interfaces/IApiModel';
import { IModelFactory }                        from './interfaces/IModelFactory';

export default abstract class ModelFactoryBase<T extends IApiModel> implements IModelFactory<T> {

    public abstract create(): T;

    public createFrom(obj: any): T {
        const result = this.MapItem(obj);
        return result;
    }

    public createArray(): Array<T> {
        const data: Array<T> = new Array<T>();
        return data;
    }
    public createArrayFrom(obj: any): Array<T> {
        const result = this.mapArray(obj);
        return result;
    }

    public mapArray(source: any): Array<T> {

        if (source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if (source === null) {
            throw new Error('Source object can not be null');
        }

        if (!Array.isArray(source)) {
            throw new Error('Source object is not an array');
        }

        const result = this.createArray();

        source.forEach((item) => {
            result.push(this.MapItem(item));
        });

        return result;
    }

    public MapItem(source: any): T {

        if (source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if (source === null) {
            throw new Error('Source object can not be null');
        }

        const result = this.create();
        if ( source.entity !== undefined ) {
            source = source.entity;
        }

        /** Map a single object */
        // tslint:disable-next-line:forin
        for (const key in result) {
            const value = source[key];

            if (value !== undefined && !Array.isArray(value)) {
                result[key] = value;
            }
        }

        return result;
    }

}
