function MinWindowSubstring(strArr) { 

  const N = strArr[0];
  const K = strArr[1];

  let hashN = {};
  let hashK = {};
  let shortestSubstring = N.length

  // convert K into hashmap
  for (const char of K) {
    if (!(char in hashK)) {
      hashK[char] = 1;
    } else {
      hashK[char] += 1;
    }
  }

  // isolate current substring of N
  let i = 0;
  let j = N.length - 1;

  // function that slices from i to j
  function slicer(str, a, b) {
    return str.slice(a, b + 1)
  };

  let currentSubstring = K;

  // FXN: converts currentSubString to hashmap
  function convertCurrentSubstringToHash() {
    hashN = {};
    for (const char of currentSubstring) {
      if (!(char in hashN)) {
        hashN[char] = 1;
      } else {
        hashN[char] += 1;
      }
    }
  }

  function sliceUpdateAndRehash() {
    currentSubstring = slicer(N, i, j);
    shortestSubstring = currentSubstring.length;
    convertCurrentSubstringToHash()
  }

  // FXN: check if hashK exists in hashN
  function checkHash() {
    for (char in hashK) {
      if (hashK[char] <= hashN[char]) {
        continue;
      } else {
        return false;
      }
    }
    shortestSubstring = currentSubstring.length;
    return true;
  }

  let dontMoveI = false;
  let currentBestSubstring = '';
  // Moves pointers i first
  while (shortestSubstring > K.length) {
    convertCurrentSubstringToHash()
    if (checkHash() && dontMoveI === false) {
      i++;
      sliceUpdateAndRehash()
      currentBestSubstring = currentSubstring
      if (!checkHash()) {
        dontMoveI = true;
        i--;
        sliceUpdateAndRehash()
      }
    } else if (checkHash() && dontMoveI === true) {
      j--;
      sliceUpdateAndRehash()
      if (!checkHash()) {
        j++;
        sliceUpdateAndRehash()
        // Complete!
        currentBestSubstring = currentSubstring
        break;
      }
    }
  }

  // RESET currentSubstring
  currentSubstring = N;
  i = 0;
  j = N.length - 1;

  // Moves pointers j first
  let dontMoveJ = false;
  while (shortestSubstring > K.length) {
    convertCurrentSubstringToHash()
    if (checkHash() && dontMoveJ === false) {
      j--;
      sliceUpdateAndRehash()
      if (!checkHash()) {
        dontMoveJ = true;
        j++;
        sliceUpdateAndRehash()
      }
    } else if (checkHash() && dontMoveJ === true) {
      i++;
      sliceUpdateAndRehash()
      if (!checkHash()) {
        i--;
        sliceUpdateAndRehash()
        // Complete!
        break;
      }
    }
  } 

if (currentBestSubstring.length >= currentSubstring.length) {
  return currentSubstring
} else {
  return currentBestSubstring
}
}
   
// keep this function call here 
console.log(MinWindowSubstring(readline()));