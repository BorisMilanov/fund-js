function solve(input) {
    let studentsCount = +input.shift()
    let lectures = +input.shift();
    let initialBonus = +input.shift();
    
    let bestStudent = Math.max(...input);
    let formula = (bestStudent / lectures) * (5+initialBonus);
    console.log(`Max Bonus: ${formula.toFixed(0)}.`);
    console.log(`The student has attended ${bestStudent} lectures.`);
}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])