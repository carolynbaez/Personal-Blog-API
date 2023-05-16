import { Router, Request, Response } from 'express';
import TestService from '../services/test.service';

const router = Router();

const service = new TestService;

router.post('/', (req: Request, res: Response) => {

    service.saveOne(req, res);

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