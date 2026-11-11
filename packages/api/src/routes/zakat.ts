/**
 * Zakat API routes
 *
 * GET    /v1/zakat/nisab               Current nisab threshold (metal price feed)
 * POST   /v1/zakat/calculate           Calculate zakat owed
 * POST   /v1/zakat/funds               Record zakat collected
 * GET    /v1/zakat/funds               List fund records for masjid
 * PUT    /v1/zakat/funds/:id/distribute Record distribution
 * GET    /v1/zakat/funds/:id/report    Shariah-compliance PDF report
 */

import { Router } from 'express';

export const zakatRouter = Router();

// GET /v1/zakat/nisab
zakatRouter.get('/nisab', async (_req, res) => {
  // TODO: integrate metal price feed (e.g. metals-api.com)
  // Nisab = value of 85g gold OR 595g silver — use lower value (silver-based is standard)
  res.json({
    data: {
      goldGrams: 85,
      silverGrams: 595,
      currency: 'USD',
      goldValueUSD: null,   // populate from price feed
      silverValueUSD: null, // populate from price feed
      calculatedAt: new Date().toISOString(),
      note: 'Nisab price feed integration pending.',
    },
  });
});

// POST /v1/zakat/calculate
zakatRouter.post('/calculate', async (req, res) => {
  const { totalAssets, totalLiabilities, currency = 'USD' } = req.body as {
    totalAssets: number;
    totalLiabilities: number;
    currency?: string;
  };

  if (totalAssets === undefined || totalLiabilities === undefined) {
    res.status(400).json({ code: 'missing_fields', message: 'totalAssets and totalLiabilities are required.' });
    return;
  }

  const zakatableWealth = Math.max(0, totalAssets - totalLiabilities);
  const zakatDue = zakatableWealth * 0.025; // 2.5%

  res.json({
    data: {
      totalAssets,
      totalLiabilities,
      zakatableWealth,
      zakatDue,
      rate: 0.025,
      currency,
    },
  });
});

// POST /v1/zakat/funds
zakatRouter.post('/funds', async (_req, res) => {
  // TODO: validate body, write to Firestore via @minarah/database
  res.status(501).json({ code: 'not_implemented', message: 'POST /v1/zakat/funds — coming soon.' });
});

// GET /v1/zakat/funds
zakatRouter.get('/funds', async (_req, res) => {
  // TODO: query Firestore, paginate
  res.status(501).json({ code: 'not_implemented', message: 'GET /v1/zakat/funds — coming soon.' });
});

// PUT /v1/zakat/funds/:id/distribute
zakatRouter.put('/funds/:id/distribute', async (req, res) => {
  res.status(501).json({ code: 'not_implemented', message: `PUT /v1/zakat/funds/${req.params['id']}/distribute — coming soon.` });
});

// GET /v1/zakat/funds/:id/report
zakatRouter.get('/funds/:id/report', async (req, res) => {
  // TODO: generate PDF Shariah-compliance report via pdfkit
  res.status(501).json({ code: 'not_implemented', message: `GET /v1/zakat/funds/${req.params['id']}/report — coming soon.` });
});
