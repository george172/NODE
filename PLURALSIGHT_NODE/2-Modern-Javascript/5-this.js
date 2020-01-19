//"this" here is "exports"

this.id = 'exports';

const testerObj =  {
  func1: function(){
    console.log('func1',this);
  },

  func2: () => {
    this.id = 'export1';
    this.id = 'export2';
    console.log('func2',this);
  },
};

testerObj.func1(); //This keyword is the function objects itself
testerObj.func2(); // this keword defined

/*
Using the arrow function works big benefits on node js
listener
*/