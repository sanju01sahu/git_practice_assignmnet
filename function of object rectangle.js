//function of object rectangle

let rectangle={
  len:5,
  width: 2,
  parameter: function(){
    let para=2*(this.len+this.width);
    return para;
  },
  area: function(){
  let a=this.len*this.width;
  return a;
  }
}
console.log("Parameter is: "+obj["parameter"]()+"\nArea is: "+obj["area"]());
