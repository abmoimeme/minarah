import { Router } from 'express';
export const campaignsRouter = Router();
// TODO: implement campaigns routes
campaignsRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'campaigns routes — coming soon.' }));
