import { Router } from 'express';
export const donationsRouter = Router();
// TODO: implement donations routes
donationsRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'donations routes — coming soon.' }));
