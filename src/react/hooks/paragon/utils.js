import { getConfig } from '../../../config';
import { basename } from '../../../initialize';

/**
 * Iterates through each given `<link>` element and removes it from the DOM.
 * @param {HTMLLinkElement[]} existingLinks
 */
export const removeExistingLinks = (existingLinks) => {
  existingLinks.forEach((link) => {
    link.remove();
  });
};

/**
* Creates the fallback theme base URL.
* @returns {string} The default theme base url.
*/
export const fallbackThemeBaseUrl = () => {
  // Always use window in development mode to ensure
  // we have the correct port
  if (getConfig().ENVIRONMENT === "development") {
    const config = getConfig();
    debugger;
    return window.location?.origin;
  }

  // Otherwise, use BASE_URL from config if we have it
  return getConfig().BASE_URL || window.location?.origin;
};

/**
* Creates the fallback URL for the given theme file.
* @param {string} url The theme file path.
* @returns {string} The default theme url.
*/
export const fallbackThemeUrl = (url) => {
  const baseUrl = fallbackThemeBaseUrl();

  // validates if the baseurl has the protocol to be interpreted correctly by the browser,
  // if is not present add '//' to use Protocol-relative URL
  const protocol = /^(https?:)?\/\//.test(baseUrl) ? '' : '//';

  return `${protocol}${baseUrl}${basename}${url}`;
};

export const isEmptyObject = (obj) => !obj || Object.keys(obj).length === 0;
