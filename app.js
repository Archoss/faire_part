const express = require('express')
const app = express()

app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Serveur connecté sur le port 3000");
});
