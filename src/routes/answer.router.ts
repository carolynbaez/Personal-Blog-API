import { Router, Request, Response } from 'express';
import AnswerService from '../services/answers.service';

const router = Router();

const service = new AnswerService;

router.post('/', (req: Request, res: Response) => {

    service.saveAnswer(req, res);

});

router.get('/:comment', (req: Request, res: Response) => {

    service.getAnswerByComment(req, res);
    
});

router.delete('/:id', (req: Request, res: Response) => {

    service.deleteOne(req, res);
    
});

export default router;