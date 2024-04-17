import express from 'express'

const app = express()

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('views engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) =>{
    res.render('services');
})

app.listen(5001,() => console.log(`Servidor encendido http://localhost:${5001}`))