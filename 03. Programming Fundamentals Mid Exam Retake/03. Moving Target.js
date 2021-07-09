function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let tokens = element.split(' ');
        let command = tokens[0];

        if (command === 'Shoot') {
            let index = tokens[1];
            let power = tokens[2];
            targets[index] -= power; //dali tuk


            if ((targets[index] <= 0)) {
                targets.splice(index,1)

            }

        } else if (command === 'Add') {
            let index = tokens[1];
            let value = tokens[2];
            if (index < 0 || index > targets.length) {
                console.log('Invalid placement!');
            } else {
                targets.splice(index, 0, value);
            }

        }
        else if (command === 'Strike') {
            let index = tokens[1];
            let radius = tokens[2];
            if (index <= 0 && index * radius +1 <targets.length) {
                console.log("Strike missed!");
            }else{
                targets.splice(index - radius, index * radius+1);

            }
         } 
      
        else if (command === 'End') {
            console.log(targets.join('|'));
        }
    }
}
solve(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])