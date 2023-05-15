import mongoose, {Schema} from 'mongoose'

export interface ITestModel extends Document{
    name: string;
    deleted: boolean;
}

const newSchema = new Schema<ITestModel>({
    name: {type: String, required: true},
    deleted: {type: Boolean, default: false}
})

export const TestModel = mongoose.model<ITestModel>('Test', newSchema)