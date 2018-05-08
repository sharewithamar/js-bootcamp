// multiple arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

//default arguments
// no value for arguments - pass undefined not null

let getScoreText = function(name = 'anonymous', score = 0) {
  return `Name : ${name} - Socre: ${score}`;
  // return 'Name: ' + name + ' - Score:' + score;
};
let scoreText = getScoreText(undefined, 100); // you cant passs empty first paramater so undefined
console.log(scoreText);

//challaenge

//total, tipPercent  .2

let getTip = function(total, tip = 0.2) {
  return `A ${tip * 100} % tip on $ ${total} would be $ ${total * tip}`;
  // return total * tip;
};

let pay = getTip(60);
console.log(pay);

//template strings
let name = 'sowra';
console.log(`hey, ${name} today we are going to match`);
