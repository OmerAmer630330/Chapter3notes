const readline = require('readline-sync');

let diceRolled= [];
let eyecolor=[ 'blue', 'green', 'brown', 'black'];
let race =[ 'Elf', 'dwarf', 'Human', 'Goblin', 'MerMaids', 'Trolls', 'Minotaur', 'Giant', 'Gorgon', 'God/Goddess'];
let role = ['Assassin', 'Mage', 'Knight', 'Archer', 'Witch', 'Necromancer', 'Monk', 'Bard'];
let pet = ['Griffin', 'Phoenix', 'Unicorn', 'Sphinx', 'Dragon'];
let charecter1 = {
    //empty for now
}

createChar(charecter1, diceRolled);
createChar2(charecter1, diceRolled);
createChar3(charecter1, diceRolled);
createChar4(charecter1, diceRolled);

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
function Randomchoices(choices) {
let randomNum = Math.floor( Math.random()*choices.length)
    return choices[randomNum];
}

function createChar(character, list) {
    character.name = readline.question("Enter Name");
    character.eyecolor = Randomchoices(eyecolor);
    console.log("rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("rolling Knowledge");
    character.Knowledge = rollStat(diceRolled);
    character.Luck = rolld6();

    displayChar(character);
}
function createChar2(character, list) {
    character.name = readline.question("Enter Name");
    character.eyecolor = Randomchoices(eyecolor);
    character.race = Randomchoices(race);
    character.role = Randomchoices(role);
    character.pet = Randomchoices(pet);
    console.log("rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("rolling Knowledge");
    character.Knowledge = rollStat(diceRolled);
    character.Luck = rolld6();

    displayChar2(character);
}

function createChar3(character, list) {
    character.name = readline.question("Enter Name");
    character.eyecolor = Randomchoices(eyecolor);
    character.race = Randomchoices(race);
    character.role = Randomchoices(role);
    character.pet = Randomchoices(pet);
    console.log("rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("rolling Knowledge");
    character.Knowledge = rollStat(diceRolled);
    character.Luck = rolld6();

    displayChar3(character);
}
function createChar4(character, list) {
    character.name = readline.question("Enter Name");
    character.eyecolor = Randomchoices(eyecolor);
    character.race = Randomchoices(race);
    character.role = Randomchoices(role);
    character.pet = Randomchoices(pet);
    console.log("rolling Strength");
    character.strength = rollStat(diceRolled);
    console.log("rolling Dexterity");
    character.Dexterity = rollStat(diceRolled);
    console.log("rolling Knowledge");
    character.Knowledge = rollStat(diceRolled);
    character.Luck = rolld6();

    displayChar4(character);
}

function displayChar(char){
    console.log(`Name: ${char.name}`);
    console.log(`Eye color: ${char.eyecolor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.Dexterity}`);
    console.log(`KNW: ${char.Knowledge}`);
    console.log(`Luck: ${char.Luck}`)
}

function displayChar2(char){
    console.log(`Name: ${char.name}`);
    console.log(`Eye color: ${char.eyecolor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.Dexterity}`);
    console.log(`KNW: ${char.Knowledge}`);
    console.log(`Race:${char.race}`);
    console.log(`Role:${char.role}`);
    console.log(`Pet: ${char.pet}`);
}

function displayChar3(char){
    console.log(`Name: ${char.name}`);
    console.log(`Eye color: ${char.eyecolor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.Dexterity}`);
    console.log(`KNW: ${char.Knowledge}`);
    console.log(`Race:${char.race}`);
    console.log(`Role:${char.role}`);
    console.log(`Pet: ${char.pet}`);
}
function displayChar4(char){
    console.log(`Name: ${char.name}`);
    console.log(`Eye color: ${char.eyecolor}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.Dexterity}`);
    console.log(`KNW: ${char.Knowledge}`);
    console.log(`Race:${char.race}`);
    console.log(`Role:${char.role}`);
    console.log(`Pet: ${char.pet}`);
}