import { Model } from 'mongoose';
import { Request, Response } from 'express';

export interface IBaseService {
    saveOne(req: Request, res: Response): Promise<Response>;
    getAll(req: Request, res: Response): Promise<Response>;
    getOne(req: Request, res: Response): Promise<Response>;
    deleteOne(req: Request, res: Response): Promise<Response>;
}

export class BaseService<T extends Document> implements IBaseService {
    
    private model: Model<T>;

    constructor(newModel: Model<any>) {
        this.model = newModel
    }

    async getAll(req: Request, res: Response): Promise<Response> {

        try {
            const data = await this.model.find()
            return res.status(200).json(data)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    }

    async saveOne(req: Request, res: Response) {
        try {
            const data = req.body
            if (data._id || data._id != "") {
                await this.model.create(data);
            }
            else {
                await this.model.findOneAndUpdate({ _id: data._id }, { $set: data }, { $new: true })
            }
            return res.status(201).json({ message: "Saved successfully", "Data": data })
        }
        catch (error) {
            return res.status(500).json(error)
        }
    }

    async getOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = await this.model.findById(id, { password: 0 }).exec()
            return res.status(200).json(data)
        }
        catch (error) {
            return res.status(500).json(error)
        }
    }

    async deleteOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            await this.model.findByIdAndDelete(id)
            return res.status(200).json({ deleted: true, message: "Deleted successfully" })
        }
        catch (error) {
            return res.status(500).json({ deleted: false, message: error })
        }
    }
}