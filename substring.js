// for substring inbuilt function

function substring(start=0,stop=str.length,str){
  let out=""
  for(i=start;i<stop;i++){
    out+=str[i];
  }
  console.log(out);
}

let str="asfdfdngfffds";
substring(2,5,str);