function findFirstDuplicate(arr) {
  const numbersSeen = []
  // type your code here
  //could have an array that stores, or an object. 
  for(let i = 0; i < arr.length; i ++){

    if (numbersSeen.includes(element)){
      return element
      } else {
        numbersSeen.push(element)
      }
    }

    return -1

  }
  // const numbersSeen = []
  // result = -1
  // arr.forEach(element => { 

  //  if (numbersSeen.includes(element)) {
  //   result = element 
  //     return;
  //   } else {

  //     numbersSeen.push(element)
  //   }
  //   // has this element been encountered before.
  //   //includes

    
  // });
  // return result;

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
