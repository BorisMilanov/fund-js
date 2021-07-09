function solve(input) {
    let people = +(input.shift());
    let arrayToString = input.toString();
    let lifts = arrayToString.split(" ").map(Number)

    for (let i = 0; i < lifts.length; i++) {
        if (lifts[i] != 4) {
            if (lifts[i] > 0 && lifts[i] < 4) {

                if (people > 0) {
                    let diff = 4 - lifts[i]
                    lifts[i] += diff
                    people -= diff;
                    lifts.splice(i, 1, 4)
                }
            }else if (people >= 4) {
                lifts.splice(i, 1, 4)
                people -= 4;
            }
            else {
                lifts.splice(i, 1, people)
                people -= people;
            }

        } 


    }
    let freeSpaceVagons = lifts.filter((x) => x < 4);
    if (people >0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lifts.join(' '));

        
    }else{
        if (freeSpaceVagons >= 1) {
            console.log('The lift has empty spots!');
            console.log(lifts.join(' '));
        }else{
            console.log(lifts.join(' '));
            
        }
      
    }
}
// solve([
//     "15",
//     "0 0 0 0 0"
// ])
solve([
    "20",
    "0 2 0"
   ])