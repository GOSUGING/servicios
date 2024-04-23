import express from 'express';
import  { engine } from 'express-handlebars';
import { services } from './data/services.data.js';
import path from 'path'


const app = express();

const __dirname = import.meta.dirname;


// Public directory
app.use(express.static(path.join(__dirname,'/public')))

app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname,'/node_modules/jquery/dist')))

// Handlebars

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views',path.join( __dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home', {title: 'Home Page 2.0'});
});

app.get('/services', (req, res) =>{
    res.render('services', {services: services});
});

app.get('/services/:name', (req, res) => {
    
    const nameUrl = req.params.name

    const service = services.find((item) => item.url === `/services/${nameUrl}`)
    console.log(service)

   return res.render('service', { service })
}); 

app.listen(5001, () => {
    console.log(`Servidor encendido http://localhost:${5001}`);
});
