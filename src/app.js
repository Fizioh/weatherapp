const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname, '../templates/views');

const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicStaticDirPath));


app.get('', (req, res) => {
    res.send("This is a weather app")
});

app.get('/weather', (req, res) => {
    res.send('This is a weather end point.');
});

app.get("*", (req, res) => {
    res.send('Page not found.')
})

app.listen(port, () =>{
    console.log("Server is up and running on port: ", port);
});