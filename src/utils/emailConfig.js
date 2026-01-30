// EmailJS Configuration
export const EMAILJS_CONFIG = {
  serviceId: "PMF Lake Mary", // Replace with your EmailJS service ID
  templateId: "template_sqtn2kq", // Replace with your EmailJS template ID
  publicKey: "AZ8_cULXf034K-faR", // Replace with your EmailJS public key
};

// Testing recipient (for now)
export const TEST_RECIPIENT = "luis@pmfmortgage.com"; // LUIS for testing

// Production recipients by page
export const PAGE_EMAIL_MAP = {
  "/": "jgoff@pmfmortgage.com", // Josh for home page
  "/about": "jgoff@pmfmortgage.com",
  "/programs/fha": "jgoff@pmfmortgage.com",
  "/programs/renovation": "jgoff@pmfmortgage.com",
  "/programs/va": "jgoff@pmfmortgage.com",
  "/tools/affordability-calculator": "jgoff@pmfmortgage.com",
  "/tools/refinance-calculator": "jgoff@pmfmortgage.com",
  "/tools/buying-home": "jgoff@pmfmortgage.com",
};

// Flag to switch between testing and production
export const USE_TEST_EMAIL = true; // Set to false after testing passes

/**
 * Get the appropriate email recipient based on current page
 * @param {string} currentPath - The current page path
 * @param {string} defaultEmail - Default email if path not found
 * @returns {string} - Email address to send to
 */
export function getRecipientEmail(
  currentPath,
  defaultEmail = "jgoff@pmfmortgage.com",
) {
  if (USE_TEST_EMAIL) {
    return TEST_RECIPIENT;
  }

  return PAGE_EMAIL_MAP[currentPath] || defaultEmail;
}
