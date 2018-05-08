// students score ,total possible score

// 15/20 - you got a C (75%) !
// A 90-100 B- 80-89 C 70-79 D 60-69 F 0-59

let calculateGrade = function (studentScore, totalScore) {
  let grade = ((studentScore / totalScore) * 100).toFixed(2);
  let letterGrade = ''
  if (grade >= 90) letterGrade = `A`;
  else if (grade >= 80 && grade <= 89) letterGrade = `B`;
  else if (grade >= 70 && grade <= 79) letterGrade = `C`;
  else if (grade >= 60 && grade <= 69) letterGrade = `D`;
  else letterGrade = `F`;
  return `you got a ${letterGrade} (${grade}}%) !`
};

console.log(calculateGrade(76, 100));
console.log(calculateGrade(89, 100));
console.log(calculateGrade(69, 100));
console.log(calculateGrade(73, 100));
console.log(calculateGrade(55, 100));
