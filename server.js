const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const models = require('./models');



const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.static('public'));

//Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

//Inform Express.js on which template engine to use
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// For post http requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(controllers);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`The server is running on PORT ${PORT}`);
    });
});

