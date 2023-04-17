// //create an object of key-value pairs
// let contacts = {
//     bff: 1234567,
//     mom: 5555555,
//     bro: 1000000
// }
//
// //log all
// console.log(contacts);
//
// //access a specific entry by its key
// console.log(contacts.bff);
//
// //can't access if the key doesn't exist
// console.log(myself);
//
// //add new entry
// contacts.sis =  7777777;
// console.log(contacts);
//
// //update an entry
// contacts.bff = 1111111;
// console.log(contacts);
//
// //delete an entry
// delete contacts.mom;
// console.log(contacts);
//
// //Is there a key called __ in there?
// console.log("bff" in contacts);
// console.log("myself" in contacts);
//
// //objects are like arrays - pass by reference not by value
// //notice the following
//
// let a = {
//     value: 20
// };
// let b = a;
// let c = {
//     value:20
// };
//
// console.log(a == b);
// console.log(a == c);
// console.log(b == c);
//
// console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    bread: 'Terrier',
    age: 9,
    size: 'Medium',
    barks:true
};
console.log(dog);

let cat = {
    catName: 'Tech',
    age: 0.2,
    size: 'Small',
    loud:false,
    colors:'Black & white'
};
console.log(cat);

let VideoGame = {
    VideoGameName: 'Red Dead Redemption 2',
    protagonist: 'Arthur Morgan',
    antagonist: 'Micah Bell',
    Type: 'Action, Story, shooter',
    Rating:10/10
};
console.log(VideoGame);

let Movie = {
    MovieName: 'Star Wars: A New Hope',
    protagonist: 'Luke Skywalker',
    antagonist: 'Darth Vader',
    genre: 'Sci-fi',
    Rating:9.9/10
};
console.log(Movie);

let Show = {
    ShowName: 'Breaking Bad',
    protagonist: 'Walter White',
    antagonist: 'Walter White',
    genre: 'Drama',
    rating:10/10
};
console.log(Show);
