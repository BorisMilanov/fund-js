function solve(input) {
    let items = input.shift().split(', ');
    for (const tokens of input) {
        let token = tokens.split(' - ');
        let command = token[0];

        if (command === 'Collect') {
            let itemName = token[1];
            if (!items.includes(itemName)) {
                items.push(itemName);
            }
        } else if (command === 'Drop') {
            let itemName = token[1];
            if (items.includes(itemName)) {
                let index = items.indexOf(itemName);
                items.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            let [oldItem,newItem] = token[1].split(':');
            if (items.includes(oldItem)) {
                let index = items.indexOf(oldItem);
                items.splice(index+1, 0,newItem);
              
            }

        }else if(command ==='Renew'){
            let itemName = token[1];
            if (items.includes(itemName)) {
                let index = items.indexOf(itemName);
                items.splice(index, 1);
                items.push(itemName)
            }
        }else if (command === 'Craft!'){
            console.log(items.join(', '));
        }

    }
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])