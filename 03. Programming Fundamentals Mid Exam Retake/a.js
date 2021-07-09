function solves(input) {
    let targets = input.shift().split(' ').map(Number);
    while(true) {
        let tokens = input.split(' ')
        let command = tokens[0];
        let index = +tokens[1];

        if (command === 'Shoot') {
            let currentOperator = +tokens[2];

            if (index >= 0 && index < targets.length) {
                targets[index]-=currentOperator
                    if (targets[index]<=0) {
                    targets.splice(index, 1);
                        
                    }
                 
            }
        }
        else if (command === 'Add') {
            let currentOperator = +tokens[2];
            if (targets.length > index && index >= 0) {
                targets[index] += currentOperator;

            } else {
                console.log("Invalid placement!");

            }
        } else if (command === 'Strike') {
            let currentOperator = +tokens.split(' ')[2];
            if (index - currentOperator >= 0 && index + currentOperator < targets.length ) {
                targets.splice(index - currentOperator, currentOperator * 2 + 1)

            } else {

                console.log("Strike missed!");

            }
        }
        else if (command === 'End') {
            console.log(targets.join('|'));

            break;
        }

    }

}
solves(['52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'])
