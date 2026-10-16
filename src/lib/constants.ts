/**
 * Practice launch / patient-portal go-live.
 * Athena integration is in progress; portal + direct scheduling come online 2026-10-19.
 */
export const LAUNCH_DATE = "October 19, 2026";
export const LAUNCH_DATE_SHORT = "Oct 19, 2026";
export const SCHEDULING_OPENS = "October 2026";

/**
 * Athena self-scheduling — new & established patients booking directly
 * with Bethany Cook, NP.
 */
export const BOOK_NEW_PATIENT_URL =
  "https://consumer.scheduling.athena.io/?locationId=36255-1&practitionerId=36255-1";

/**
 * Athena Patient Portal — established-patient sign-in, specific to this
 * practice's athenahealth account.
 */
export const PATIENT_PORTAL_URL = "https://36255-1.portal.athenahealth.com";

/**
 * Wellness Collective class / meet-and-greet signup — HIPAA JotForm.
 */
export const CLASS_SIGNUP_URL = "https://form.jotform.com/262266139303151";

/**
 * JotForm HIPAA form ID for the patient contact / appointment request form.
 * Embed handler auto-resizes the iframe based on postMessage from JotForm.
 */
export const JOTFORM_ID = "262056886342059";
