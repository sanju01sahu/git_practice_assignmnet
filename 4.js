let obj={
    name: "Sanjay Sahu",
    age: 26,
    mage:45,
    address: "dsa",
    ditto: function(a,b) {
        return a + b
        
    },
}
let a=9,b=8;
console.log(obj["ditto"](a,b));



obj.range=245;
obj["potata"]="sdfg"
delete(obj["address"]);
obj["age"]=20;
console.log(obj);