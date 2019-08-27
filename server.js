var express = require('express');
var app = express();
//app.use(express.static('assets'));

app.use('/store', function(req, res, next){
    console.log('Hej jestem posrednikiem przy zadaniu do /store');
    next();
})

app.get('/store', function (req, res){
    res.send('To jest sklep');
})

app.get('/', function (req, res) {
    res.send('Hello World');
});


app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});