import { Router } from 'express';
export const donorsRouter = Router();
// TODO: implement donors routes
donorsRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'donors routes — coming soon.' }));
