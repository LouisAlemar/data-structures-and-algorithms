/**
 * Name: Bubble Sort
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function bubbleSort(arr) {
  var noSwaps;

  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;

    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([45, 10, 5, -14, 17]));
