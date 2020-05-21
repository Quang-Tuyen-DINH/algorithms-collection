//SOCK MERCHANT
let n = 7; // the array length
let ar = [1, 2, 1, 2, 4, 4, 2];

function sockMerchant(n, ar) {
 
    let numPairs = 0;
    let currentColor = 0;
    let arSorted = ar.sort(function(a, b) {
        return a - b;
        //return [1, 1, 2, 2, 2, 4, 4]
    });
    for (let i = 0; i < arSorted.length; i++) {
        if (arSorted[i] === currentColor) {
            continue;
        } else {
            numPairs += Math.floor(((arSorted.lastIndexOf(arSorted[i]) - arSorted.indexOf(arSorted[i])) + 1) / 2);
            currentColor = arSorted[i];
        }
    }
    return numPairs;
}