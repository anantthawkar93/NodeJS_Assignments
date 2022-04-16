/*steps:
1. to fetch/get all forums
2. edit  the created forum using id (put request)
3. to delete the forum data using id
*/
/*Building RESTful APIs with the MERN stack
*/
//Load Forum Model
const Forum = require("../models/forum");
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
