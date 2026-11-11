/**
 * @minarah/database
 * Firebase / Firestore database client and collection helpers.
 *
 * Firebase Realtime Database: https://minarah-adc1c-default-rtdb.firebaseio.com/
 * Firestore is used for structured documents (masjids, donors, donations, zakat).
 * Realtime Database is used for live prayer-times display, kiosk and TV feeds.
 */

export { db, rtdb, initFirebase } from './firebase.js';
export * from './collections.js';
