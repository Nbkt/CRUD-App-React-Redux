
import _ from 'lodash';

function itemExists(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (_.isEqual(haystack[i], needle)) {
      return true;
    }
  }
  return false;
}

// Search an array of objects with term, loop through array, then loop through the key in object
// use indexOf, if any values returns not -1, check if the object already exists in the result array, otherwise add it.
export function searchFor(array, term) {
  let results = [];
  let termFormatted = _.trim(term).toLowerCase();
  for(let i=0; i < array.length; i++) {
    for(let key in array[i]) {
      if  (array[i][key].toLowerCase().indexOf(termFormatted) !== -1 ) {
        if (!itemExists(results, array[i])) {
          results.push(array[i]);
        }
      }
    }
  }
  return results;
}
