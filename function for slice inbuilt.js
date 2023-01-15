//custome function for slice inbuilt function

function cSlice(arr, start, end) {
  let slicedArr = [];
  if (end === undefined) {
    end = arr.length;
  }
  for (let i = start; i < end; i++) {
    slicedArr.push(arr[i]);
  }
  return slicedArr;
}
let fruits = ["apple", "banana", "orange", "mango"];
let out = cSlice(fruits, 1, 3);
console.log(out);


function power(arr, pow) {
  let sum="";
  for(let i=0;i<arr.length;i++){
    sum+=(arr[i]**pow)+" ";
  }
  return sum;
}


let a=function(arr,x){
  let acb=[];
  for(i=0;i<arr.length;i++){
    if(checkBy(arr[i],x)){
      abc.push(arr[i]);
    }
  }
  return abc;
}
function checkBy(arr,x){
  if(arr%x==0){
    return true;
  }else{
    return false;
  }
}