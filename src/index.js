const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('../src/routes/index');
app.use(express.static(__dirname + '/public'));
console.log();

//HTTP loger
app.use(morgan('combined'));

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH : ', path.join(__dirname, 'resources/views'));

route(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
