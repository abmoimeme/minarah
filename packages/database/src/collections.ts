/**
 * Firestore collection path constants.
 * All documents are scoped by masjid_id for multi-tenancy.
 */

export const COLLECTIONS = {
  MASJIDS: 'masjids',
  /** Sub-collection: masjids/{masjidId}/donors */
  donors: (masjidId: string) => `masjids/${masjidId}/donors`,
  /** Sub-collection: masjids/{masjidId}/donations */
  donations: (masjidId: string) => `masjids/${masjidId}/donations`,
  /** Sub-collection: masjids/{masjidId}/campaigns */
  campaigns: (masjidId: string) => `masjids/${masjidId}/campaigns`,
  /** Sub-collection: masjids/{masjidId}/zakat_funds */
  zakatFunds: (masjidId: string) => `masjids/${masjidId}/zakat_funds`,
  /** Sub-collection: masjids/{masjidId}/zakat_distributions */
  zakatDistributions: (masjidId: string) => `masjids/${masjidId}/zakat_distributions`,
  /** Sub-collection: masjids/{masjidId}/prayer_times */
  prayerTimes: (masjidId: string) => `masjids/${masjidId}/prayer_times`,
  /** Sub-collection: masjids/{masjidId}/students (school add-on) */
  students: (masjidId: string) => `masjids/${masjidId}/students`,
  /** Sub-collection: masjids/{masjidId}/classes (school add-on) */
  classes: (masjidId: string) => `masjids/${masjidId}/classes`,
} as const;

/**
 * Realtime Database paths — used by kiosk, TV display, and live prayer feeds.
 */
export const RTDB_PATHS = {
  /** Live prayer times for today: /live/{masjidId}/prayer_times */
  prayerTimes: (masjidId: string) => `live/${masjidId}/prayer_times`,
  /** Kiosk display state: /live/{masjidId}/kiosk */
  kiosk: (masjidId: string) => `live/${masjidId}/kiosk`,
  /** TV display announcements: /live/{masjidId}/tv */
  tv: (masjidId: string) => `live/${masjidId}/tv`,
} as const;
