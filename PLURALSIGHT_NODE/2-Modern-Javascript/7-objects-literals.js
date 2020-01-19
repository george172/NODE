const mystery = "answer";

const obj = {
  p1:10,
  p2:20,
  f1(){},
  f2:() => {},
  [mystery] :42, //undefined
  //PI:PI
};

console.log(obj.p1)
console.log(obj.p2)
console.log(obj.f1)
console.log(obj.f2)
console.log(obj.mystery); //undefined
console.log(obj.answer);

//obj.freeze(); //Freeze the value of the object
//if it is nested object then this will not work

//npm install immutable

