const express = require('express');


const app = express();


// Exercise 1 Be polite, Greet the User 

app.get('/greetings/:username', (req, res) => {
  
    res.send(`<h1>Greetings ${req.params.username}</h1>`)
});


// Exercise 2 Rolling the Dice 

app.get('/roll/:numberParameter', (req, res) => {
    const randomNumber = Math.ceil(Math.random()* 
req.params.numberParameter)

    if (!randomNumber) {
        res.send(`you must specify a number`)
    } else {
        res.send(`you rolled ${randomNumber}`)
    }
});


// Exercise 3 I want That One 
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index', (req, res) => {
    const items = collectibles[req.params.index];

    if (!items) {
       res.send('This item is not yet in stock. Check back soon!'); 
    } else {
        res.send(`So you want the ${items.name}? For ${items.price}, it can be yours!`);
    } 
});



// Exercise 4 Filter Shoe 
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {

const minPrice = req.query.minPrice
const maxPrice = req.query.maxPrice
const type = req.query.type

const filteredContent = [];
for (let index = 0; index < shoes.length; index++) {
    const element = shoes[index];
    //console.log(element)

    if ((minPrice && element.price < minPrice) ||
        (maxPrice && element.price > maxPrice) ||
        (type && element.type !== type)) {


        } else { 
            filteredContent.push(element);
        }
}
if (filteredContent.length > 0) {
    res.send(filteredContent);
} else {
    res.send(shoes);
}
});
















app.listen(3000, () => {
    console.log('Listening on port 3000');
});


