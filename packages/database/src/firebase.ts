import { initializeApp, getApps, cert, type ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getDatabase } from 'firebase-admin/database';

/**
 * Firebase project configuration.
 *
 * Realtime Database URL: https://minarah-adc1c-default-rtdb.firebaseio.com/
 *
 * Set the following environment variables:
 *   FIREBASE_PROJECT_ID         — Firebase project ID
 *   FIREBASE_CLIENT_EMAIL       — Service account client email
 *   FIREBASE_PRIVATE_KEY        — Service account private key (with \n newlines)
 *   FIREBASE_RTDB_URL           — Realtime Database URL
 *                                 (default: https://minarah-adc1c-default-rtdb.firebaseio.com)
 */

const RTDB_URL =
  process.env['FIREBASE_RTDB_URL'] ??
  'https://minarah-adc1c-default-rtdb.firebaseio.com';

export function initFirebase() {
  if (getApps().length > 0) return;

  const projectId = process.env['FIREBASE_PROJECT_ID'];
  const clientEmail = process.env['FIREBASE_CLIENT_EMAIL'];
  const privateKey = process.env['FIREBASE_PRIVATE_KEY']?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Missing Firebase credentials. ' +
      'Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL and FIREBASE_PRIVATE_KEY.',
    );
  }

  const serviceAccount: ServiceAccount = { projectId, clientEmail, privateKey };

  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: RTDB_URL,
  });
}

/** Firestore instance (structured data: masjids, donors, donations, zakat). */
export const db = getFirestore;

/** Realtime Database instance (live feeds: prayer times, kiosk display, TV). */
export const rtdb = () => getDatabase();
