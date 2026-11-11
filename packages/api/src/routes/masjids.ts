import { Router } from 'express';
export const masjidsRouter = Router();
// TODO: implement masjids routes
masjidsRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'masjids routes — coming soon.' }));
