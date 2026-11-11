/**
 * @minarah/notifications
 * Push notification helpers via Firebase Cloud Messaging (FCM).
 */

import { getMessaging } from 'firebase-admin/messaging';

export interface PushPayload {
  title: string;
  body: string;
  imageUrl?: string;
  data?: Record<string, string>;
}

/**
 * Send a push notification to a single FCM token.
 */
export async function sendToToken(token: string, payload: PushPayload) {
  const messaging = getMessaging();
  return messaging.send({
    token,
    notification: {
      title: payload.title,
      body: payload.body,
      imageUrl: payload.imageUrl,
    },
    data: payload.data,
  });
}

/**
 * Send a push notification to a Masjid topic.
 * Mobile app subscribers call: messaging().subscribeToTopic(token, `masjid-${masjidId}`)
 */
export async function sendToMasjid(masjidId: string, payload: PushPayload) {
  const messaging = getMessaging();
  return messaging.send({
    topic: `masjid-${masjidId}`,
    notification: {
      title: payload.title,
      body: payload.body,
      imageUrl: payload.imageUrl,
    },
    data: payload.data,
  });
}

/**
 * Send a Jumu'ah reminder to all masjid subscribers.
 */
export async function sendJumuahReminder(
  masjidId: string,
  masjidName: string,
  khutbahTime: string,
) {
  return sendToMasjid(masjidId, {
    title: `Jumu'ah Reminder — ${masjidName}`,
    body: `Khutbah begins at ${khutbahTime}. May Allah accept from us all.`,
    data: { type: 'jumuah_reminder', masjidId },
  });
}
