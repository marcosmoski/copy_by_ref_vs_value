function foo(prop) { 
  // a copy is created, so change the value, will change the prop inly in this scope
  prop = 20; 
  console.log(prop)
}

function handler () { 
  let example = 10;
  foo(example)
  // value remains teh same even after pass it as paremeter and be changed inside of a function
  console.log(example)
}

handler()
