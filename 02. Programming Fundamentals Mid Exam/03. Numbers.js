function solve(input) {
    let arr1 = input.split(' ').map(Number).reduce((prev, curr, i) => (prev + curr));
    let arr2 = input.split(' ');
    let avg = arr1 / arr2.length;
    let resultArr = []

    for (let i = 0; i < arr2.length; i++) {
        if (avg < arr2[i]) {
            
            resultArr.push(arr2[i]);
        }
    }
    if (resultArr.length === 0) {
        console.log('No');
    }

    console.log(resultArr.sort((a,b)=> b - a).slice(0,5).join(' '));
}
//solve('10 20 30 40 50')
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')
solve('1')