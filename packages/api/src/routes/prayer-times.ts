import { Router } from 'express';
export const prayertimesRouter = Router();
// TODO: implement prayer-times routes
prayertimesRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'prayer-times routes — coming soon.' }));
