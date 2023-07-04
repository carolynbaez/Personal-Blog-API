import { Schema, model } from 'mongoose';
import { commentModel, IComments } from './comments.model';

export interface IAnswer extends IComments {
    comment: Schema.Types.ObjectId
}

const newSchema = new Schema<IAnswer>({
    comment: { type: Schema.Types.ObjectId, ref: "Comments", required: true },
    userName: { type: String, default: "Anonymous" },
    description: {type: String, required: true},
    deleted: {type: Boolean, default: false},
    userId: {type: String, required: true}

}, {
    timestamps: true,
    discriminatorKey: 'type'
});

export const answerModel = model('Answers', newSchema);