/*steps:
1. create the aurthor object
2. save the created author object
3. to fetch the data from MongoDB
*/
const Author = require('../models/author');
//1. create the aurthor object
exports.createAuthor = (request, response)=>{
    let {first_name, last_name,dob,dod} = request.body;

 //   2. save the created author object
    let authorOb = new Author({first_name,last_name,dob,dod});
    authorOb.save((err)=>{
        if(err){
            response.json(err);
        }else{
            response.json({status:1, data:{msg:"Author created successfully"}});
        }
    });
}

//3. to fetch the data from MongoDB
exports.listAuthors = (request, response)=>{
    Author.find(function(err, authors_list){
        if(err){
            response.json(err)
        }else{
            response.json({status:1, data: 'authors_list'});
        }
    });
}