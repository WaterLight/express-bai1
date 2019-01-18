const express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route');

const port = 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', (req, res) => res.render('./index', {
    name: 'HoangNam'
}));

app.use('/users', userRoute);

app.listen(port, () => console.log(`App listening on port ${port}`));