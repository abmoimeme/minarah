# Minarah

**Multi-tenant Islamic institution management platform** — built for masjids and Islamic schools across North America, Europe, and West Africa.

---

## What is Minarah?

Minarah is a branded, end-to-end SaaS for Islamic institutions. It handles donations, Zakat, prayer times, community communication, school administration, and live display — all in one platform, available in English, French, Arabic, and Italian.

---

## Architecture

Minarah is a **pnpm + Turborepo monorepo** with six apps and four shared packages.

```
minarah/
├── apps/
│   ├── mobile/     React Native (Expo) — donor & community app
│   ├── admin/      React 18 — masjid admin dashboard
│   ├── school/     React 18 — School & Maktab module (add-on)
│   ├── kiosk/      React + Electron — prayer kiosk display
│   └── tv/         React + Electron — TV display for prayer hall
├── packages/
│   ├── api/        Node.js / Express REST API  (/v1)
│   ├── shared/     TypeScript types, constants, plan limits
│   ├── database/   Firebase Admin SDK + Firestore + RTDB helpers
│   └── notifications/ FCM push notification helpers
├── infra/
│   └── firebase/   Firestore rules, RTDB rules, indexes, firebase.json
├── docs/           Architecture docs, API reference
├── .env.example    Environment variable template
├── turbo.json      Turborepo pipeline
└── pnpm-workspace.yaml
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Mobile app | React Native (Expo), Firebase JS SDK |
| Admin dashboard | React 18, Vite, TailwindCSS, TanStack Query |
| School module | React 18, Vite, TailwindCSS |
| Kiosk / TV | React + Electron |
| API | Node.js, Express, TypeScript |
| Database | Firebase Firestore (documents) + Realtime Database (live feeds) |
| Auth | Firebase Authentication |
| Payments | Stripe |
| Push notifications | Firebase Cloud Messaging (FCM) |
| Monorepo tooling | pnpm workspaces, Turborepo |

**Firebase project:** `minarah-adc1c`  
**Realtime Database:** `https://minarah-adc1c-default-rtdb.firebaseio.com`

---

## Plans & Pricing

| | Starter | Masjid | Academy |
|---|---|---|---|
| Price | Free | $79/mo (billed annually) | $149/mo (billed annually) |
| Transaction fee | 1.0% | 0.75% | 0.5% |
| Active donors | Up to 50 | Unlimited | Unlimited |
| Zakat module | — | ✅ | ✅ |
| School & Maktab | — | Add-on (pricing TBD) | ✅ Included |
| Branded mobile app | ✅ | ✅ | ✅ |

---

## Key Features

- **Donation management** — one-time and recurring, campaign-based, donor receipts
- **Zakat module** — collection, Shariah-compliance reporting, 8 recipient category tracking, nisab calculator
- **Prayer times** — admin-set iqama times pushed live to kiosk, TV, and mobile
- **School & Maktab** — student enrollment, attendance, grades, guardian portal (add-on or included)
- **Live display** — prayer kiosk and TV display driven by Firebase Realtime Database
- **Push notifications** — Jumu'ah reminders, campaign updates via FCM
- **Multi-language** — English, French, Arabic, Italian
- **Multi-currency** — USD, EUR, GBP, CAD, AUD, SAR, AED, XOF

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9 (`npm install -g pnpm`)
- Firebase project (create at [console.firebase.google.com](https://console.firebase.google.com))

### Setup

```bash
# 1. Clone
git clone https://github.com/abmoimeme/minarah.git
cd minarah

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env
# → fill in your Firebase credentials and Stripe keys

# 4. Run all apps in dev mode
pnpm dev

# Or run a specific app
pnpm --filter @minarah/api dev
pnpm --filter @minarah/admin dev
pnpm --filter @minarah/mobile start
```

### Firebase Setup

```bash
npm install -g firebase-tools
firebase login
firebase use minarah-adc1c
firebase deploy --only firestore:rules,database
```

---

## Project Status

🚧 **Early development** — scaffold is live, feature implementation in progress.

---

## License

Proprietary — all rights reserved. Contact [abdoul.samb@gmail.com](mailto:abdoul.samb@gmail.com) for licensing.
