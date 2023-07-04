import { Schema, model } from 'mongoose';

export interface IComments extends Document {
    userName: string;
    description: string;
    deleted: boolean;
    userId: String
}

const newSchema = new Schema<IComments>({
    userName: { type: String, default: "Anonymous" },
    description: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    userId: { type: String, required: true }
}, {
    timestamps: true
});

export const commentModel = model<IComments>('Comments', newSchema);