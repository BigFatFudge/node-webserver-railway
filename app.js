
require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


// Handelbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico:
app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('home', {
  nombre: 'Fernando',
  titulo: 'Curso de node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de node'
  })
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de node'
  })
});

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port, () => {
    console.log(`Example app litening at http://localhost:${port}`)
})