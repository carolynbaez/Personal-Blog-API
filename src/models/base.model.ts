import {Document, Model} from 'mongoose';

export interface IBaseModel extends Document {
    deleted: Boolean;
}

export type BaseModel <T extends Document> = Model<T>;

