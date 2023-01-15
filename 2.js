// function for inbuilt join function 


function cJoin(arr, separator) {
    let joinedString = "";
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        joinedString += arr[i];
      } else {
        joinedString += separator + arr[i];
      }
    }
    return joinedString;
  }
  let fruits = ["apple", "banana", "orange", "mango"];
  let out = cJoin(fruits, 1, 3);
  console.log(out);