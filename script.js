const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const router = require('./routes/account');
const bodyParser = require('body-parser');
const sequelize = require('./server');

app.use(bodyParser.urlencoded({extended:false}))

app.use(router);

app.use('/',(req,res) => {
    res.render('home',{
        path:'/'
    });
})

app.set('view engine','pug')
app.set('views','./views');

sequelize.sync()
    .then(data => console.log(data))
    .catch(err => console.log(err))

app.listen(3000,() => console.log('running on port 3000'));
