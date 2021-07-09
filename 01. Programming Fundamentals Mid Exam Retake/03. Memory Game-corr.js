function foo(input) {
    let numbers = input.shift().split(' ');
    let moves = 0;
    input.pop();

    for (let i = 0; i < input.length; i++) {
        let [index1, index2] = input[i].split(' ').map(Number);


        if (index1 === index2 || index1 <= -1 || index2 <= -1 || index1 >= numbers.length || index2 >= numbers.length) {
            moves++;
            numbers.splice(numbers.length / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (numbers[index1] === numbers[index2]) {
            moves++;
            const element = numbers[index1];
            numbers.splice(index1, 1);
            let index3 = numbers.indexOf(element);
            numbers.splice(index3, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }
        if (numbers.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
//COrrect
    }

    if (numbers.length !== 0) {
        console.log(`Sorry you lose :(
${numbers.join(" ")}`)
    }
}
foo([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
])
