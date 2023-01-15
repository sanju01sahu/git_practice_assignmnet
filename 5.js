



let arr =[1,2,3,4,5,6,7,8,9,0];
let query=2;
function indexfor(a){
  let index
  for(let i=0;i<arr.length;i++){
    if(a==arr[i]){
      index=i;
    }
  }
  return index;
}
console.log(indexfor(query));

