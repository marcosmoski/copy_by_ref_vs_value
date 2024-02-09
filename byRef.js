function foo(prop) { 
  // the object referece in memory is here, so, after i change a property, it changes the original object 
  prop.param1 = 20;
  console.log("Foo has", prop)
}

function handler () { 
  let example = {
    param1: 1, 
    param2: 3
  }
  foo(example)
  // value changes because the reference was changed inside foo
  console.log("Example has", example)
}

handler()
