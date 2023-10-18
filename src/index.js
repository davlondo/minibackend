const express = require('express');
const app = express();
const morgan=require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Configuraciones
app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2)
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
  });
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/crud', {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
 
//Routes
app.use(require('./routes/credits'));
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
