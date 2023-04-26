const readline= require("readline-sync")

let sandwich = readline.question("What type of sandwich would you like:");
if (sandwich == "chicken") {
    console.log('$5.25');
} else if (sandwich == "beef") {
    console.log('$5.50');
} else if (sandwich == "vegan") {
    console.log('$4.75');
} else {
    console.log('sorry but we dont have that')
}
let drink = readline.question ("Would you like a drink:");
if (drink == 'yes'){
    let whatDrink = readline.question ( "What size would you like:")
    if (whatDrink == "large" ){
        console.log('$1.75');
    } else if (whatDrink == "small"){
        console.log('$1.00')
    } else if (whatDrink == "medium"){
    console.log('$1.25')
}else {
        console.log('sorry but we dont have that')
    }
} else if (drink == "no"){
    console.log('ok then')
}
let fries = readline.question('would you like some fries:');
if (fries == "yes") {
    let Whatfries = readline.question( 'What size would you like:');
    if (Whatfries == "large"){
        console.log('$2.25');
    } else  if (Whatfries == "small"){
        console.log('$1.25');
    } else  if (Whatfries == "medium"){
        console.log('$1.75');
    }
} else if (fries == "no"){
    console.log('ok then');
}
let sauce = readline.question( 'would you like any sauces');
if (sauce == "yes"){
    let Whatsauce = readline.question('What sauce would you like')
    if (Whatsauce == 'bbq', 'ketchup', 'ranch', 'mustard');{
        console.log('*Free*')
    }
} else if (sauce == "no"){
    console.log("ok then");
}