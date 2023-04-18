const readline = require('readline-sync');

let diceRolled= [];
let charecter1 = {
    //empty for now
}

createChar(charecter1, diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }

}

function sum(list){
    let sum=0;
    for (let i=0; i<list.length; i++){
        sum+=list[i]
    }
    console.log(`the total was: ${sum}.`)
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list)
}

function createChar(character, list){
    character.name = readline.question("Enter Name");
    console.log("rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("rolling Knowledge");
    character.Knowledge = rollStat(diceRolled);
}

function displaychar(char){
    console.log(`Name: ${char.name}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.Dexterity}`);
    console.log(`KNW: ${char.Knowledge}`);
}