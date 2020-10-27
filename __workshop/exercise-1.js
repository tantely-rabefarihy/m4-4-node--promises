// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  myPromise = new Promise ((resolve, reject) => {
if(array.every(element => typeof element === "string")){
  const allCaped = array.map(word => word.toUpperCase());
  resolve(allCaped)
} else {
  reject("Oops! At least one element is not a string")
}

});
   return myPromise;
}

const sortWords = (array) => {
  myPromise = new Promise ((resolve, reject) => {
    if(array.every(element => typeof element === "string")) {
      const sortedArray = array.sort();
      resolve(sortedArray);
    } else {
      reject("Oops! At least one element is not a string")
    }
  });
  return myPromise;
}


// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
