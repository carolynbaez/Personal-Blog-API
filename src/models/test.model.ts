import {IBaseModel, BaseModel} from './base.model';
import mongoose, {Schema, model} from 'mongoose'

export interface ITestModel extends Document{
    name: string;
}

const newSchema = new Schema<ITestModel>({
    name: {type: String, required: true}
})

export const TestModel = mongoose.model<ITestModel>('Test', newSchema)