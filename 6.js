function uppercase(str){
  let upper ="";
  upper=str.toUpperCase();

  return upper;  
}

function firstLower(str){
  let arr="";
  for(let i=0;i<str.length;i++){
    if(i==0){
      arr+=str[i].toLowerCase();
    }else{
      arr+=str[i];
    }
  }
  return arr;
}
let abc="Test";
let bcd=firstLower(uppercase(abc));
console.log(bcd);