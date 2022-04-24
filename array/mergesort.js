// arr1, arr2 has sorted
function mergeSort(arr1, arr2) {
  // check input
  if (arr1.length === 0) {
    return arr2
  }

  if (arr2.length === 0) {
    return arr1
  }
  let araruMerged = []
  let rabbit = 0
  let turtle = 0
  let arr1Items = arr1[rabbit]
  let arr2Items = arr2[turtle]
  
  while(arr1Items || arr2Items) {
    if (!arr2Items || arr1Items < arr2Items) {
      araruMerged.push(arr1Items);
      rabbit++;
      arr1Items = arr1[rabbit];
    } else {
      araruMerged.push(arr2Items);
      turtle++;
      arr2Items = arr2[turtle];
    }
  }
  
  return araruMerged
}

module.exports = mergeSort