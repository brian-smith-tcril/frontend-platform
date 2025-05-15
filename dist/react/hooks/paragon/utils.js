import { getConfig } from '../../../config';
import { basename } from '../../../initialize';

/**
 * Iterates through each given `<link>` element and removes it from the DOM.
 * @param {HTMLLinkElement[]} existingLinks
 */
export var removeExistingLinks = function removeExistingLinks(existingLinks) {
  existingLinks.forEach(function (link) {
    link.remove();
  });
};

/**
* Creates the fallback theme base URL.
* @returns {string} The default theme base url.
*/
export var fallbackThemeBaseUrl = function fallbackThemeBaseUrl() {
  var _window$location2;
  var config = getConfig();
  debugger;

  // Always use window in development mode to ensure
  // we have the correct port
  if (getConfig().ENVIRONMENT === "development") {
    var _window$location;
    return (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.origin;
  }

  // Otherwise, use BASE_URL from config if we have it
  return getConfig().BASE_URL || ((_window$location2 = window.location) === null || _window$location2 === void 0 ? void 0 : _window$location2.origin);
};

/**
* Creates the fallback URL for the given theme file.
* @param {string} url The theme file path.
* @returns {string} The default theme url.
*/
export var fallbackThemeUrl = function fallbackThemeUrl(url) {
  var baseUrl = fallbackThemeBaseUrl();

  // validates if the baseurl has the protocol to be interpreted correctly by the browser,
  // if is not present add '//' to use Protocol-relative URL
  var protocol = /^(https?:)?\/\//.test(baseUrl) ? '' : '//';
  return "".concat(protocol).concat(baseUrl).concat(basename).concat(url);
};
export var isEmptyObject = function isEmptyObject(obj) {
  return !obj || Object.keys(obj).length === 0;
};
//# sourceMappingURL=utils.js.map