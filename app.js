const express = require('express');
const app = express();
const port = 3002
const server = app.listen(port, () => {
    console.log('listening on port ' +  port);
});

app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res, next) => {
    console.log('METHOD', req.method);
    next();
},  (req, res, next) => {
    const payload = {
        name: 'Ernesto'
    };
    res.status(200).render('home', payload);
});