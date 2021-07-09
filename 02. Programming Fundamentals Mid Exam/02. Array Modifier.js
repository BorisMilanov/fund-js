function solve(input) {
    let arr = input.shift().split(' ').map(Number);
    for (const line of input) {
        let command = line.split(' ').shift(' ')
        if (command === 'swap') {
            let firstParam = line.split(' ')[1];
            let secondParam = line.split(' ')[2];
            const tmp = arr[firstParam];
            arr[firstParam] = arr[secondParam];
            arr[secondParam] = tmp;

        }
        if (command === 'multiply') {
            let firstParam = line.split(' ')[1];
            let secondParam = line.split(' ')[2];
            arr[firstParam] = arr[firstParam] * arr[secondParam];

        }
        if (command === 'decrease') {
            for (let i = 0; i < arr.length; i++) {
                arr[i]--;
            }
        }

    }
    console.log(arr.join(', '));
}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'])