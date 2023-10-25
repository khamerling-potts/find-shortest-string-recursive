function findShortestStringRecursive(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  const remainingShortest = findShortestStringRecursive(arr.slice(1));
  if (arr[0].length <= remainingShortest.length) {
    return arr[0];
  }
  return remainingShortest;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestStringRecursive(["flower", "juniper", "lily", "dandelion"])
  );

  console.log("expecting b");
  console.log(findShortestStringRecursive(["b"]));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
Problem: find shortest string in array, return the first one if multiple match criteria
base case: if array length is 1, return arr[0]
remainingShortest = recursive call(arr with first el sliced off)
if arr[0] is less than remaining shortest, return arr[0]
otherwise, return remaining shortest
*/
