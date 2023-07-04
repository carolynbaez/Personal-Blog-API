import { Router, Request, Response } from 'express';
import CommentService from '../services/comments.service';

const router = Router();

const service = new CommentService;

router.post('/', (req: Request, res: Response) => {

    service.saveComment(req, res);

});

router.get('/', (req: Request, res: Response) => {

    service.getAll(req, res);
    
});

router.get('/:id', (req: Request, res: Response) => {

    service.getOne(req, res);
    
});

router.delete('/:id', (req: Request, res: Response) => {

    service.deleteOne(req, res);
    
});

export default router;