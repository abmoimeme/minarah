import { Router } from 'express';
export const schoolRouter = Router();
// TODO: implement school routes
schoolRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'school routes — coming soon.' }));
