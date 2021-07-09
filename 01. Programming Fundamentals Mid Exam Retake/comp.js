function solve(params) {
    let sum =0 ;
    let taxes = 0;
    let sumwithOutTaxes = 0;
    for (let item of params) {
 
        if (item === 'special') {
            sumwithOutTaxes = sum
            taxes = sum * 0.2;
            sum = sum * 1.2;
            sum = sum * 0.9;
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${sumwithOutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${sum.toFixed(2)}$`);

        }else if(item === 'regular'){
            sumwithOutTaxes = sum
            taxes = sum * 0.2;
            sum = sum *1.2;
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${sumwithOutTaxes.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log('-----------');
            console.log(`Total price: ${sum.toFixed(2)}$`);
        }
        item = +item
        sum += item;
        if (item<0) {
            console.log('Invalid price!');
        }else if(item == 0){
            console.log("Invalid order!");
        }

    }
}
solve([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ])