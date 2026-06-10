/**
 * Play Store Link Configuration for Conty Landing Page
 * Allows easy configuration of the App Package ID, default UTM codes,
 * and referral UTM tracking parameters.
 */

export const PLAY_STORE_CONFIG = {
  // The Android App Package ID
  appId: "com.gadmin.conty",

  // Default UTM parameters when no referral is present
  defaultUtmSource: "landing_page",
  defaultUtmCampaign: "landing",

  // UTM parameters used for referrals
  referralUtmSource: "referral",

  // The query parameter used in the URL to detect referrals (e.g. ?ref=CARLOS123)
  referralQueryParam: "ref",

  // Base Play Store details URL
  baseUrl: "https://play.google.com/store/apps/details",
};

/**
 * Dynamically builds a Play Store URL with UTM tracking parameters.
 * If a referral code is provided, it configures the campaign with the referral code.
 * If not, it uses the default landing page UTM parameters.
 * 
 * @param refCode Optional referral code detected from the visitor
 * @returns The fully formatted Play Store URL
 */
export function getPlayStoreUrl(refCode?: string | null): string {
  const params = new URLSearchParams();
  params.set("id", PLAY_STORE_CONFIG.appId);

  // Build the referrer value (utm_source=...&utm_campaign=...)
  // Since Play Store's 'referrer' parameter must contain URL-encoded UTM parameters,
  // we set the value of 'referrer' and URLSearchParams will handle the outer URL encoding.
  if (refCode && refCode.trim() !== "") {
    params.set(
      "referrer",
      `utm_source=${PLAY_STORE_CONFIG.referralUtmSource}&utm_campaign=${encodeURIComponent(refCode.trim())}`
    );
  } else {
    params.set(
      "referrer",
      `utm_source=${PLAY_STORE_CONFIG.defaultUtmSource}&utm_campaign=${PLAY_STORE_CONFIG.defaultUtmCampaign}`
    );
  }

  return `${PLAY_STORE_CONFIG.baseUrl}?${params.toString()}`;
}
