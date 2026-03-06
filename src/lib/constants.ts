/**
 * Athenahealth patient portal ID. Replace with Bethany's specific ID when she provides it.
 */
export const ATHENAHEALTH_PORTAL_ID = "sd23413";

const ATHENAHEALTH_PORTAL_BASE = "https://es.portal.athenahealth.com";

/**
 * Patient portal login URL (Athenahealth). Swap ATHENAHEALTH_PORTAL_ID above to update.
 */
export const PATIENT_PORTAL_URL = `${ATHENAHEALTH_PORTAL_BASE}/${ATHENAHEALTH_PORTAL_ID}/`;

/**
 * Book Appointment URL — points to her Athenahealth portal. Uses same portal ID.
 */
export const BOOK_APPOINTMENT_URL = PATIENT_PORTAL_URL;
