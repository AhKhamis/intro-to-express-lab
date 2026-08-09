// Import Express
const express = require("express");

// Create an Express app
const app = express();

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

//Exercise 1

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`<h1>Hello, ${username}!</h1>`);
});

//Exercise 2

app.get('/roll/:maxnumber', (req, res) => {
    const parameter = req.params.maxnumber;
    const maxNumber = parseInt(parameter , 10);
    const roll = Math.floor(Math.random() * maxNumber) + 1;
    res.send(`<h1>You rolled a ${roll}!</h1>`);
});

//Exercise 3
app.get('/collectibles/:index', (req, res) => {
    const parameterindex =req.params.index;
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

if (parameterindex > collectibles.length - 1) {
  res.send(`<h1>Sorry, we don't have that collectible.</h1>`);
}

else {
    res.send(`<h1>${collectibles[parameterindex].name} costs $${collectibles[parameterindex].price}</h1>`);

}
});

// Exercise 4

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
    const { name, type, price } = req.query;
    let filteredShoes = shoes;

    if (name) {
      filteredShoes = filteredShoes.filter(shoe => shoe.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }

    if (price) {
      const maxPrice = parseFloat(price);
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    res.send(`<h1>Filtered Shoes:</h1><ul>${filteredShoes.map(shoe => `<li>${shoe.name} - $${shoe.price}</li>`).join('')}</ul>`);
  });

//Port 3000 code part

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});