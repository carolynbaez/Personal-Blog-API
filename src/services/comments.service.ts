import { BaseService } from './base.service';
import { commentModel, IComments } from '../models/comments.model';

export default class CommentsService extends BaseService<IComments>{
    constructor() {
        super(commentModel);
    }
}