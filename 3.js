let obj={
  arr:["luffy","zoro"],
  loop: function(){
    for(let i=0;i<this.arr.length;i++){
      console.log(this.arr[i]);
    }
  }
}
obj.loop();


