import { Router } from 'express';
export const integrationsRouter = Router();
// TODO: implement integrations routes
integrationsRouter.get('/', (_req, res) => res.status(501).json({ code: 'not_implemented', message: 'integrations routes — coming soon.' }));
