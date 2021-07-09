function solve(input) {
   let  inputa= input.split('|');
    let startHealt = 100;
    let count =0;
    let coinsAmount =0;
    for (const tokens of inputa) {
        let token = tokens.split(' ');
        if (token[0] === 'potion') {
            count++;
            let healtPureAmount = +token[1];
            if (startHealt + healtPureAmount > 100) {
                console.log(`You healed for ${100 - +startHealt} hp.`);
                console.log(`Current health: 100 hp.`);
                startHealt = 100
            }else if(startHealt + healtPureAmount <= 100){ // work  <= 100
                console.log(`You healed for ${healtPureAmount} hp.`);

                startHealt += healtPureAmount;
                console.log(`Current health: ${startHealt} hp.`);
            }

        } else if (token[0] === 'chest') {
            count++;
            let coins = +token[1]
            coinsAmount += coins;
            console.log(`You found ${coins} bitcoins.`);
        } else {
            count++;
            let monster = token[0]
            let damage = +token[1]

            if (damage >= startHealt) {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${count}`);
                return;
            } else {
                startHealt -= damage;
                console.log(`You slayed ${monster}.`);
            }
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${coinsAmount}`);
    console.log(`Health: ${startHealt}`);
}
//solve('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')