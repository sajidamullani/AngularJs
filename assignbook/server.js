const express = require('express');

const router = require("express").Router();
const app = express();
const port = 3000;

//const carcontroller = require('./controller/controller.cars');
const onRequest = (req, resp) => {
    resp.send("we  called <strong>http://localhost:3000</strong>");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', onRequest);

require('./api/car.route')(app);
app.use('/api/cars', router);
require('./api/bike.route')(app);
app.use('/api/bikes', router);
require('./api/book.route')(app);
app.use('/api/books', router);
//default caal to 





//const carRout = require('./api/car.route');
//const bikeRout = require('./api/bike.route');
//app.get('/api/cars/', carcontroller.findAllcar);

//app.get('/api/cars/:id', carcontroller.findByPk);

//app.post('api/cars/', carcontroller.insertcar);

//app.put('api/cars/', carcontroller.updatecar);

//app.delete('api/cars/:id', carcontroller.deletecar);

//app.use('/api/cars', router);
app.listen(port, () => {
    console.log("http://localhost:3000 Stareted");
});