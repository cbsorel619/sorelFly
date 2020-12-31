const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');
// const Campground = require('./models/campground');

// mongoose.connect('mongodb://localhost:27017/sand-box', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//     console.log("Database Connected")
// })

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('Serving on Port 3000')
})