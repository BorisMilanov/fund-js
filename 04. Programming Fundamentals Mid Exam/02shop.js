function solve(input) {
    let list = input.shift().split('!');

    for (const element of input) {
        let [command, product,productSec] = element.split(' ');
        if (command === 'Go') {
            console.log(list.join(', '));
        }
        if (command === 'Urgent') {
            if (!list.includes(product)) {
                list.unshift(product)
            }
        }
        if (command=== 'Unnecessary') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                list.splice(index,1)
            }
        }
        if (command === 'Correct') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                list.splice(index,1);
                list.splice(index,0,productSec)
            }
        }
        if (command === 'Rearrange') {
            if (list.includes(product)) {
                let index = list.indexOf(product);
                list.splice(index,1)
                list.push(product)
            }
        }
    }
}
// solve(['Tomatoes!Potatoes!Bread!a',
//     'Unnecessary Milk',
//     'Unnecessary a',
//     'Urgent Tomatoesa',
//     'Go Shopping!'])

solve(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
   'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'])