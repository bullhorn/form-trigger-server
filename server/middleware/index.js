import { Router } from 'express';
import cors from 'cors';
import triggers from './triggers';

export default function() {
	var middleware = Router();
    middleware.use(cors());

    middleware.post('/trigger/standard', triggers.standard);
    middleware.post('/trigger/reject', triggers.reject);
    middleware.post('/trigger/complex', triggers.complex);
    middleware.post('/trigger/deprecated', triggers.deprecated);
    middleware.post('/trigger/validate', triggers.validation);
    
	return middleware;
}