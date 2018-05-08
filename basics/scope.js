// Lexical scope (static scope)
// Global scope  - Defined outside of all code blocks
// Local scope - Defined inside a code block

// In a scope you can access varibales defined in that scope or any parent/ancestor scope
//Global Scope  (varOne)
//Local Scope (varTwo)
//:Localscope (varFour)
//Local Scope ( varThree)

let varOne = 'varOne';

if (true) {
  console.log(varOne);
  let varTwo = 'varTwo';
  console.log(varTwo);
  if (true) {
    let varFour = 'varFour';
  }
}

if (true) {
  let varThree = 'varThree';
}

console.log(varTwo);
