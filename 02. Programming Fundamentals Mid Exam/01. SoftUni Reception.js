function solve(input) {
    let allEmployeesWork = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let hoursNeeded = Math.ceil(Number(input[3]) / +allEmployeesWork);
    
    
    for (let index = 1; index <=hoursNeeded; index++) {
        if(index % 4 === 0){
            hoursNeeded++;
        }
        
    }

    console.log(`Time needed: ${hoursNeeded}h.`);
}
solve(['1','2','3','45'])
solve(['3','2','5','40'])