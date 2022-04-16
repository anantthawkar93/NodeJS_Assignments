/*steps:
1. to fetch/get all forums
2. edit  the created forum using id (put request)
3. to delete the forum data using id
*/
/*Building RESTful APIs with the MERN stack
*/
//Load Forum Model
const Forum = require("../models/newForum");
const forums = [];
//@route GET /forum/forum/test
//@description tests forums route
//@access Public
exports.getForumTesting = (req, resp)=>{
    resp.json('forum route testing!');
};

//@route GET /forum/forum
//@description Get all forums
//@access Public
exports.getForums = (req, resp)=>{
    Forum.find()
    .then(forums => resp.json(forums))
    .catch(err => resp.status(404).json({
        noforumsfound: 'No Forums found' 
    }));
};

//@route POST /forum/forum
//@description add/save forum
//@access public
exports.createForum = (req, resp) =>{
    Forum.create(req.body)
        .then(forums => resp.json({ msg: 'Forum added successfully' }))
        .catch(err => resp.status(400).json({ error: 'Unable to add this forum' }));
};


//@route GET forum/:id
//@description Get single forum by id
//@access Public
exports.getSingleForum = (req, resp)=>{
    const details = req.body;
    const validate = { new:true, runValidators:true }
    Forum.findById(req.params.id, details, validate, (err) =>{
        if(err){
            resp.status(400).json({error: 'Unable to update the Database'});
        }else(
            resp.json({status: 1,  data: `Forum with Id ${req.params.id} is updated successfully`})
        )
    })
};

//@route PUT /forum
//@description update forum
//@access public
exports.editForum = (req, resp)=>{
    const details = req.body;
    const validate = { new:true, runValidators:true }
    Forum.findByIdAndUpdate(req.params.id, details, validate, (err) =>{
        if(err){
            resp.status(400).json({error: 'Unable to update the Database'});
        }else(
            resp.json({status: 1,  data: `Forum with Id ${req.params.id} is updated successfully`})
        )
    })
};

// @route GET /forum/remove/:id
// @description Delete forum by id
// @access Public
exports.deleteForum = (req, resp) => {
    Forum.findByIdAndRemove(req.params.id, req.body)
      .then(forum => resp.json({ mgs: 'Forum entry deleted successfully' }))
      .catch(err => resp.status(404).json({ error: 'No such a forum' }));
  };

/*
//Getting All forums

exports.getForums = async (req, resp) => {
  try{
    const forums = await Forum.find()
    resp.json(forums)
  }catch(err){
    resp.status(500).json({message: err.message})
  }
} 

//Getting single forum by ID
exports.getSingleForum = (getForum, req, resp) =>{
  resp.json(req.forum)
}

//Updating the forum by ID
exports.updateForum = async (getForum, req, resp) => {
    if(req.body.title != null){
      req.body.title = req.body.title
    }
    if(req.body.author != null){
      req.body.author = req.body.author
    }
    if(req.body.forumbody != null){
      req.body.forumbody = req.body.forumbody
    }
    try{
        const updatedForum = await resp.forum.save();
        resp.json(updatedForum);

    }catch(err){
        resp.status(400).json({ message: err.message })
    }
  }


  //Deleting forum by ID
exports.deleteForum = (getForum, req, resp) => {
    try{
      resp.forum.remove()
    }catch(err){
      resp.status(500).json({ message: err.message })
    }
  }

//We will use 'getForum' function as middeware commanly for all ID related requested.
// Instead of writting repeated  func for every ID based request.. 
  async function getForum( req, resp, next) {
    let forum 
    try{
        forum = await Forum.findById(req.params.id)
        if(forum === null){
          return resp.status(404).json({messsage: "Cannot found forum"})
        }
    }catch(err){

    }
    resp.forum = forum
    next()
  }


  //Creating forum function
exports.createForum = async (req, resp) => {
  const forum = new Forum({
    title: req.body.title,
    doc: req.body.doc,
    forumbody: req.body.forum,
    author: req.body.author 
  })
  try{
    const newForum = await forum.save()
    resp.status(201).json(newForum)
  }catch(err){
    /*Bad Request n unsuccessful GET, PUT, or POST 
request due to invalid content
    resp.status(400).json({message: err.message})
  }
}
*/