/**
 * Minarah API Server
 * Express REST API — multi-tenant, masjid_id scoped.
 *
 * Base URL: /v1
 *
 * Auth: Bearer JWT (Firebase Auth token)
 * All routes require a valid token unless marked public.
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { initFirebase } from '@minarah/database';

// Route modules
import { masjidsRouter } from './routes/masjids.js';
import { donorsRouter } from './routes/donors.js';
import { donationsRouter } from './routes/donations.js';
import { campaignsRouter } from './routes/campaigns.js';
import { zakatRouter } from './routes/zakat.js';
import { prayerTimesRouter } from './routes/prayer-times.js';
import { schoolRouter } from './routes/school.js';
import { integrationsRouter } from './routes/integrations.js';

// ─── Bootstrap ───────────────────────────────────────────────────────────────

initFirebase();

const app = express();
const PORT = process.env['PORT'] ?? 3000;

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(helmet());
app.use(cors({ origin: process.env['CORS_ORIGIN'] ?? '*' }));
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

// ─── Routes ───────────────────────────────────────────────────────────────────

app.get('/health', (_req, res) => res.json({ status: 'ok', version: '0.1.0' }));

app.use('/v1/masjids',       masjidsRouter);
app.use('/v1/donors',        donorsRouter);
app.use('/v1/donations',     donationsRouter);
app.use('/v1/campaigns',     campaignsRouter);
app.use('/v1/zakat',         zakatRouter);
app.use('/v1/prayer-times',  prayerTimesRouter);
app.use('/v1/school',        schoolRouter);
app.use('/v1/integrations',  integrationsRouter);

// ─── Error handler ───────────────────────────────────────────────────────────

app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ code: 'internal_error', message: err.message });
  },
);

app.listen(PORT, () => {
  console.log(`Minarah API listening on port ${PORT}`);
});

export default app;
