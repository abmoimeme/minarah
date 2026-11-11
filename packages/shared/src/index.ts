/**
 * @minarah/shared
 * Shared types, constants, and utilities across all Minarah apps and packages.
 */

// ─── Core Entity Types ──────────────────────────────────────────────────────

export type UUID = string;

export type Currency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'SAR' | 'AED' | 'XOF';

export type Language = 'en' | 'fr' | 'ar' | 'it';

export type PlanTier = 'starter' | 'masjid' | 'academy';

// ─── Masjid ─────────────────────────────────────────────────────────────────

export interface Masjid {
  id: UUID;
  name: string;
  slug: string;
  country: string;
  timezone: string;
  currency: Currency;
  defaultLanguage: Language;
  plan: PlanTier;
  schoolAddonActive: boolean;
  firebaseProjectId?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Donor ──────────────────────────────────────────────────────────────────

export interface Donor {
  id: UUID;
  masjidId: UUID;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: Address;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}

// ─── Donation / Campaign ─────────────────────────────────────────────────────

export type DonationFrequency = 'one_time' | 'weekly' | 'monthly' | 'annual';

export interface Donation {
  id: UUID;
  masjidId: UUID;
  donorId: UUID;
  campaignId?: UUID;
  amount: number;
  currency: Currency;
  frequency: DonationFrequency;
  transactionId?: string;
  notes?: string;
  createdAt: string;
}

export interface Campaign {
  id: UUID;
  masjidId: UUID;
  title: string;
  description?: string;
  goalAmount?: number;
  currency: Currency;
  startDate: string;
  endDate?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Zakat ───────────────────────────────────────────────────────────────────

export type ZakatType = 'fitr' | 'maal' | 'fidya' | 'kaffarah' | 'other';

export type ZakatRecipientCategory =
  | 'faqir'      // the poor
  | 'miskin'     // the destitute
  | 'amil'       // zakat administrators
  | 'muallaf'    // new Muslims
  | 'riqab'      // freeing captives
  | 'gharim'     // those in debt
  | 'fi_sabil_allah' // in the cause of Allah
  | 'ibn_al_sabil';  // wayfarers

export interface ZakatFund {
  id: UUID;
  masjidId: UUID;
  fiscalYear: number;         // Hijri year, e.g. 1446
  fiscalYearGregorian: number; // e.g. 2026
  zakatType: ZakatType;
  totalCollected: number;
  totalDistributed: number;
  distributedTo: ZakatRecipientCategory[];
  currency: Currency;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface ZakatDistribution {
  id: UUID;
  fundId: UUID;
  masjidId: UUID;
  recipientCategory: ZakatRecipientCategory;
  amount: number;
  currency: Currency;
  notes?: string;
  distributedAt: string;
  createdAt: string;
}

// ─── Prayer Times ────────────────────────────────────────────────────────────

export type PrayerName = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha' | 'jumuah';

export interface PrayerTime {
  id: UUID;
  masjidId: UUID;
  date: string; // ISO date
  prayer: PrayerName;
  adhanTime: string;  // HH:mm
  iqamaTime: string;  // HH:mm
  createdAt: string;
  updatedAt: string;
}

// ─── School / Maktab ─────────────────────────────────────────────────────────

export interface Student {
  id: UUID;
  masjidId: UUID;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  enrollmentDate: string;
  classId?: UUID;
  guardianName?: string;
  guardianPhone?: string;
  guardianEmail?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface SchoolClass {
  id: UUID;
  masjidId: UUID;
  name: string;
  teacherId?: UUID;
  schedule?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── API Response Envelope ───────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// ─── Constants ───────────────────────────────────────────────────────────────

export const PLAN_LIMITS = {
  starter: {
    maxDonors: 50,
    transactionFeePercent: 1.0,
    hasZakat: false,
    hasSchool: false,
  },
  masjid: {
    maxDonors: Infinity,
    transactionFeePercent: 0.75,
    hasZakat: true,
    hasSchool: false, // available as add-on
  },
  academy: {
    maxDonors: Infinity,
    transactionFeePercent: 0.5,
    hasZakat: true,
    hasSchool: true,
  },
} as const satisfies Record<PlanTier, {
  maxDonors: number;
  transactionFeePercent: number;
  hasZakat: boolean;
  hasSchool: boolean;
}>;
