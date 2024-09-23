//Import Express and create Express app
const express = require('express')
const app = express()

//Routes

//1 Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Welcome and good day to you, ${req.params.username}!</h1>`)
})

//2 Rolling the Dice
app.get('/roll/:number', (req, res) => {
    const sidesOnDie = req.params.number
    if (isNaN(sidesOnDie)) {
        res.send('You must specify a number.')
    } else {
        const randomNumber = Math.ceil(Math.random() * sidesOnDie)
        res.send(`You rolled a ${randomNumber}.`)
    }
})

//3 I Want THAT One!
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:productId', (req, res) => {
    const collectible = collectibles[req.params.productId]
    if (collectible) {
        res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`)
    } else {
        res.send('This item is not yet in stock. Check back soon!')
    }
  })

//4 Filter Shoes by Query Parameters
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// app.get('/shoes', (req, res) => {
//     const shoeQuery = []
//     const minPrice = req.query.minprice
//     const maxPrice = req.query.maxprice
//     const type = req.query.type
//     shoes.forEach((shoe, idx) => {
//         if (shoe.price > minPrice) {
//             shoeQuery.push(shoe)
//         } if (shoe.price < maxPrice) {
//             shoeQuery.push(shoe)
//         } if (shoe.type === type) {
//             shoeQuery.push(shoe)
//         }
//     })
//     res.send(shoeQuery)
// })

app.get('/shoes', (req, res) => {
    const minPrice = req.query.minprice
    const maxPrice = req.query.maxprice
    const type = req.query.type
    const shoeQuery = shoes.filter((shoe) => {
            return shoe.price > minPrice

        }

    )
    

        // (shoe.price > minPrice)
        // (shoe.price < maxPrice)
        // (shoe.type === type)
        res.send(shoeQuery)

    })


// app.get('/shoes', (req, res) => {
//     const shoeQuery = shoes
//     const minPrice = req.query.minprice
//     const maxPrice = req.query.maxprice
//     const type = req.query.type
//     shoes.forEach((shoe, idx) => {
//         if (shoe.price < minPrice) {
//             shoeQuery.pop(shoe)
//         } if (shoe.price > maxPrice) {
//             shoeQuery.pop(shoe)
//         } if (shoe.type !== type) {
//             shoeQuery.pop(shoe)
//         }
//     })
//     res.send(shoeQuery)
// })

// app.get('/shoes', (req, res) => {
//     const minPrice = req.query.minprice
//     shoes.forEach((shoe) => {
//         if (shoe.price > minPrice) {
//             console.log(shoe)
//         }
//     })
// })


//Listen
app.listen(3000, () => {
    console.log('Listening on port 3000')
})

