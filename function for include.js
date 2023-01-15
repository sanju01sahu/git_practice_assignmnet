//custome function for include inbuilt function

function inc(arr, a) {
  let check = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
      check = true;
      break;
    }
  }
  if (check) {
    return true;
  } else {
    return false;
  }
}

let arr = [1, 2, 3, 4, "d", "a"], a = "d";
console.log(inc(arr, a));