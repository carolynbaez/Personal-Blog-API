import { BaseService } from './base.service';
import { commentModel, IComments } from '../models/comments.model';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export default class CommentsService extends BaseService<IComments>{
    constructor() {
        super(commentModel);
    }

    async saveComment(req: Request, res: Response) {
        try {

            const data = req.body;


            if (data._id && data._id != "") {

                await commentModel.findOneAndUpdate({ _id: data._id }, { $set: data }, { $new: true });

            }
            else {
                if (!data.userId || data.userId == "") {

                    data.userId = uuidv4();

                }

                await commentModel.create(data);

            }

            return res.status(201).json({ message: "Saved successfully", "Data": data });

        }
        catch (error) {

            console.error.bind(console, "Error: ");

            return res.status(500).json(error);
        }
    }
}