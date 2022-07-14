import moment from "moment";
// import * as _ from "underscore";
import resolveConfig from 'tailwindcss/resolveConfig';

/**
 *
 * @param data
 * @param filetype
 * @param filename
 */
export function downloadBlobFile(data, filetype, filename) {
  const blob = new Blob([data], {type: filetype});
  const link = document.createElement("a");

  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
}

/**
 *
 * @param errorObj
 * @param key
 * @returns {null|*}
 */
export function getValidationErrors(errorObj, key) {
  if (errorObj && errorObj[key]) {
    if (Array.isArray(errorObj[key])) {
      return errorObj[key][0];
    }
    return errorObj[key];
  }
  return null;
}

/**
 *
 * @param fn
 * @returns {Function}
 */
export const preventDefault = (fn) => (event) => {
  event.preventDefault();
  fn(event);
};

/**
 *
 * @param fn
 * @returns {Function}
 */
export const stopPropagation = (fn) => (event) => {
  event.stopPropagation();
  fn(event);
};

/**
 *
 * @param fn
 * @returns {Function}
 */
export const changedInput = (fn) => (event) => fn(event.target.value);

/**
 *
 * @param comment
 * @returns {{all_replies: (*[]|(*|{all_replies})[]|Array)}}
 */
export function sanitizeComment(comment) {
  return {
    ...comment,
    all_replies: comment.all_replies || comment.replies
  };
}

/**
 *
 * @param item
 * @param data
 * @returns {{all_replies: {all_replies}[]}|{all_replies: *[]}}
 */
export function updateAllRepliesRecursive(item, data) {
  if (item.id === data.reply_id) {
    return {
      ...item,
      all_replies: [...item.all_replies, data]
    };
  }

  return {
    ...item,
    all_replies: item.all_replies.map(i => updateAllRepliesRecursive(i, data))
  };
}

/**
 *
 * @param item
 * @param data
 * @returns {{all_replies: (*|{all_replies})[]}}
 */
export function updateComment(item, data) {
  if (item.id === data.id) {
    return {
      ...item,
      ...data
    };
  }

  const all_replies = item.all_replies.map(i => updateComment(i, data));

  return {
    ...item,
    all_replies
  };
}

/**
 *
 * @param datetime
 * @returns {*}
 */
export const dateForHumans = (datetime) => moment(datetime).format("H:mm on D MMM YYYY");

/**
 *
 * @param datetime
 * @returns {string}
 */
export const dateForHumansNotification = (datetime) => moment(datetime).format("H:mm a");

/**
 *
 * @param func
 * @param delay
 * @returns {Function}
 */
export function debounce(func, delay) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  }
}

/**
 *
 * Find out if a tailwind screen value matches the current window
 *
 * @param {string} screen
 *
 * @return {Object|Boolean}
 */
export const screenIs = (screen = '') => {
  const screens = resolveConfig().theme.screens;

  // create a keyed object of screens that match
  const matches = Object.entries(screens).reduce((results, [name, size]) => {
    const mediaQuery = typeof size === 'string' ? `(min-width: ${size})` : `(max-width: ${size.max})`;

    results[name] = window.matchMedia(mediaQuery).matches;

    return results;
  }, {});

  // show all matches when there is no screen choice
  if (screen === '') {
    return matches;
  }

  // invalid screen choice
  if (!screens[screen]) {
    console.error(`No match for "${screen}"`);

    return false;
  }

  return matches[screen];
};

/**
 *
 * @param body
 * @param wordsLimit
 * @returns {string}
 */
// export function formatBodyContent(body, wordsLimit) {
//   if (!body) {
//     return "";
//   }
//
//   let uniqueSeparator = Math.floor(Math.random() * 10000000000 + 1);
//
//   let wordsArray = [];
//   let linesArray = body
//     .replace(/<br>/g, uniqueSeparator)
//     .replace(/\n/g, uniqueSeparator)
//     .split(uniqueSeparator);
//
//   let urlsArray = [];
//   let validatedUrlsArray = [];
//   let displayBody = "";
//
//   let linesWordsArray = [];
//
//   _.each(linesArray, (line, index) => {
//     let lineWords = line.split(/\s/);
//     if (lineWords.length > 0) {
//       linesWordsArray[index] = [];
//
//       _.each(lineWords, word => {
//         wordsArray.push(word);
//         linesWordsArray[index].push(word);
//       });
//     }
//   });
//
//   _.each(wordsArray, word => {
//     let trimmedWord = word.trim("!\"#$%&'()*+,-.@:;<=>[\\]^_`{|}~");
//     if (stringIsValidUrl(trimmedWord)) {
//       urlsArray.push(trimmedWord);
//     }
//   });
//
//   _.each(urlsArray, word => {
//     let prefix = "";
//
//     if (
//       word.substr(0, 7) != "http://" &&
//       word.substr(0, 8) != "https://"
//     ) {
//       prefix = "http://";
//     }
//
//     validatedUrlsArray.push({prefix: prefix, url: word});
//   });
//
//   let wordsCounter = 0;
//
//   let lineIndex = 0,
//     wordIndex = 0,
//     line = null,
//     word = null;
//
//   let output = [];
//   while (
//     lineIndex < linesWordsArray.length &&
//     ((wordsLimit && wordsCounter <= wordsLimit) || !wordsLimit)
//     ) {
//     line = linesWordsArray[lineIndex];
//     let newLine = "";
//     while (
//       wordIndex < line.length &&
//       ((wordsLimit && wordsCounter <= wordsLimit) || !wordsLimit)
//       ) {
//       word = line[wordIndex];
//
//       wordsCounter++;
//
//       if (wordIndex != 0) {
//         newLine += " ";
//       }
//
//       if (
//         validatedUrlsArray.length > 0 &&
//         word.indexOf(validatedUrlsArray[0].url) != -1
//       ) {
//         word = word.replace(
//           validatedUrlsArray[0].url,
//           '<a target="_blank" data-no-history="true" class="underline hover:opacity-75" ' +
//           'onclick="event.stopPropagation();" href=' +
//           validatedUrlsArray[0].prefix +
//           validatedUrlsArray[0].url +
//           ">" +
//           validatedUrlsArray[0].url +
//           "</a>"
//         );
//
//         validatedUrlsArray.splice(0, 1);
//       }
//
//       newLine += word;
//
//       wordIndex++;
//     }
//
//     output.push(newLine);
//
//     lineIndex++;
//     wordIndex = 0;
//   }
//
//   return output.join("<br/>");
// }

/**
 *
 * @param url
 * @returns {boolean}
 */
export function stringIsValidUrl(url) {
  return /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
    url
  );
}

/**
 *
 * @param paragraph
 * @param text
 * @returns {string}
 */
export function highlightText(paragraph, text) {
  if (typeof paragraph === 'string') {
    const filterRegEx = new RegExp(text, "gi");
    const replaceFn = (string) => (`<span class="bg-accent-light">${string}</span>`);
    return (text.length > 1) ? paragraph.replace(filterRegEx, replaceFn) : paragraph
  }
}

/**
 *
 * @param searchString
 * @returns {function(*=): boolean}
 */
export function filterFn(searchString) {
  return function search(row) {
    // name the function so we can use recursion (thus we can't use an arrow function)
    return Object.keys(row).some(key => {
      // ...
      if (typeof row[key] === "string") {
        // if the current property is a string
        // then check if it contains the search string
        return row[key].toLowerCase().indexOf(searchString.toLowerCase()) > -1;
      } else if (row[key] && typeof row[key] === "object") {
        // otherwise, if it's an object
        return search(row[key]); // do a recursive check
      }
      return false; // return false for any other type (not really necessary as undefined will be returned implicitly)
    });
  }
}

/**
 *
 * @param file_path
 * @returns {string}
 */
export function fileIconName(file_path) {

  const parts = file_path.split('.');
  const lastPart = parts[parts.length - 1];

  switch (lastPart) {

    case "xlsx":
      return "mdi-file-excel";

    case "pdf":
      return "mdi-file-pdf";

    case "jpg":
    case "png":
      return "mdi-image";

    default:
      return "mdi-file-document";
  }
}

/**
 *
 * @param fn
 * @returns {function(*): *}
 */
export function onInputChange(fn) {
  return (event) => fn(event.target.value);
}

/**
 *
 * @param file
 * @returns {*|boolean}
 */
export function isFileImage(file) {
  return file && file['type'].split('/')[0] === 'image';
}

/**
 *
 * @param file
 * @returns {FormData}
 */
export function createFormData(file) {
  const data = new FormData();
  data.append("Content-Type", file.type);
  data.append("file", file);
  return data;
}
