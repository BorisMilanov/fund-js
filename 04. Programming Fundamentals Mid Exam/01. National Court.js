function solve(params) {
    let employees = Number(params[0]) + +params[1] + +params[2];
    let people = +params[3]
    let hour = 0
       
    while (people > 0) {      
        hour++;
        if (hour % 4 === 0) {
            hour++;

        }
        people -=employees
    }

    console.log(`Time needed: ${hour}h.`); 
}
solve(["1",
"2",
"3",
"45"])
// solve(["5",
//     "6",
//     "4",
//     "20"])