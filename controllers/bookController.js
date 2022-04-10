const {request} = require("express");
const Book = require("../models/book");

exports.createBook = (request, response) =>{
    const {name, description, author} = request.body;

    let bookOb = new Book({ name, description, author });
    bookOb.save((err)=>{
        if(err){
            response.json(err);
        }else{
            response.json({status:1, data: {msg: "book created"}});
        }
    })
};
exports.getBooks = (request, resp)=>{
    Book.find((err, books_List)=>{
        if(err){
            resp.json(err);
        }else{
            resp.json({status:1, data: books_list});
        }
    })
}
exports.getBookswithAuthor = (request, resp)=>{
    Book.find()
    //populate will gives us additional all info/data linked with 'author'
        .populate("author")
        //exec will finally execute the function.
        .exec((err, books_List)=>{
        if(err){
            resp.json(err);
        }else{
            resp.json({status:1, data: books_list});
        }
    })
}
exports.getBookwithCondition = (request, resp) =>{
    Book.find({ name: 'test book2'})
        //exec will finally execute the function
        .exec((err, books_list)=>{  
        if(err){
            resp.json(err);
        }else{
            resp.json({ status:1, data: {books_list}});
        }
    })
}


