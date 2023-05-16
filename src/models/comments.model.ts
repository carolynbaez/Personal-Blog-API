import { Schema, model } from 'mongoose';

export interface IComments extends Document {
    userName: string;
    description: string;
    type: string;
    deleted: boolean;
}

const newSchema = new Schema<IComments>({
    userName: { type: String, default: "Anonymous" },
    description: { type: String, required: true },
    deleted: {type: Boolean, default: false}
    // type: { type: String, enum: ["Comment", "Answer"], required: true }
}, { 
    timestamps: true 
});

export const commentModel = model<IComments>('Comments', newSchema);