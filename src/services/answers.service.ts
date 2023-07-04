import { BaseService } from './base.service';
import { Request, Response } from 'express';
import { answerModel, IAnswer } from '../models/answer.model';
import { commentModel } from '../models/comments.model';
import { v4 as uuidv4 } from 'uuid';

export default class CommentsService extends BaseService<IAnswer>{

    constructor() {

        super(answerModel);
        
    }

    async saveAnswer(req: Request, res: Response) {
        try {

            const data = req.body;

            const comment = await commentModel.findById(data.comment);

            data.comment = comment?._id;

            if (!comment?.deleted) {
                if (data._id && data._id != "") {

                    await answerModel.findOneAndUpdate({ _id: data._id }, { $set: data }, { $new: true });

                }
                else {
                    if (!data.userId || data.userId == "") {

                        data.userId = uuidv4();

                    }

                    await answerModel.create(data);

                }

                return res.status(201).json({ message: "Saved successfully", "Data": data });
            }

            return res.status(200).json({ message: "Cannot modify a deleted comment" });

        }
        catch (error) {

            console.error.bind(console, "Error: ");

            return res.status(500).json(error);
        }
    }

    async getAnswerByComment(req: Request, res: Response) {
        try {

            const { comment } = req.params;

            const data = await answerModel.find({ comment: comment, deleted: false });

            return res.status(200).json(data);
        }
        catch (error) {

            console.error.bind(console, "Error: ");

            return res.status(500).json(error);
        }

    }
}