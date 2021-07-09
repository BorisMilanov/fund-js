function solve(input) {

    let neighborhood = input.shift().split('@').map(Number);   
    let current = 0;

    for (const iterator of input) {
        let [command,indexToWork] = iterator.split(" ");
        indexToWork = Number(indexToWork)
        
        if (command === 'Love!') {
            console.log(`Cupid's last position was ${current}.`);
            let arr = neighborhood.filter(a => a <= 0);
            if (arr.length === neighborhood.length) {
                console.log("Mission was successful.");
            } else {
                console.log(`Cupid has failed ${neighborhood.length - arr.length} places.`);
            }
        }
        current += indexToWork;

        if (command === 'Jump') {


            if (current < neighborhood.length) {
                neighborhood[current] -= 2;
                if (neighborhood[current] === 0) {
                    console.log(`Place ${current} has Valentine's day.`);
                } else if (neighborhood[current] < 0) {
                    console.log(`Place ${current} already had Valentine's day.`);
                }

            } else {
                current = 0;
                neighborhood[current] -= 2;
                if (neighborhood[current] === 0) {
                    console.log(`Place ${current} has Valentine's day.`);
                } else if (neighborhood[current] < 0) {
                    console.log(`Place ${current} already had Valentine's day.`);
                }
            }
        }


    }    

}
// solve(['10@10@10@2',
//     'Jump 1',
//     'Jump 2',
//     'Love!'])

solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'])