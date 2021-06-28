const Book = require('../db/models').Book;




//select * from books;
exports.findAllbook = (req, resp) => {
        console.log("findall" + Book);
        if (Book !== undefined) {
            Book.findAll().then(data => resp.send(data))
                .catch(err => resp.status(500).send({ message: "no recors found" }));

        } else {
            resp.send("book is undefined");
        }
    }
    //select * from bikes where id=?;
exports.findByPK = (req, resp) => {
    Book.findByPk(req.params.id)
        .then(data => resp.send(data))
        .catch(err => resp.status(500).send({ message: "Error to find records" }));
}

//insert into books (name,brand) values(?,?);
exports.insert = (req, resp) => {
        const book = {
            bookname: req.body.bookname,
            authorname: req.body.authorname,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        Book.create(book)
            .then(data => resp.send(data))
            .catch(err => resp.status(500).send({ message: "Error while adding new record" }));
    }
    //update bikes set name=? where id=?;
exports.update = (req, resp) => {
        Book.update({ bookname: req.body.bookname }, { where: { id: req.body.id } })
            .then(data => resp.send(data))
            .catch(err => resp.status(500).send({ message: "Error while updating record" }));
    }
    //delete from bikes where id=?
exports.delete = (req, resp) => {
    Book.destroy({ where: { id: req.params.id } })
        .then(data => resp.send(data))
        .catch(err => resp.status(500).send({ message: "Error while deleting record" }));
}