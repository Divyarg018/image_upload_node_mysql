const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Templating engine
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})