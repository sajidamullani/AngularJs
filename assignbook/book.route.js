module.exports = app => {
    const bookcontroller = require('../controller/controller.books');
    const express = require('express');
    const router = express();

    router.get('/books/', bookcontroller.findAllbook);
    router.get('/books/:id', bookcontroller.findByPK);
    router.post('/books/', bookcontroller.insert);
    router.put('/books/', bookcontroller.update);
    router.delete('/books/:id', bookcontroller.delete);

    app.use('/api/', router);
}