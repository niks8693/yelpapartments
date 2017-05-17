var express=require('express');
var router=express.Router();
var Comment=require('../models/comment');
var User=require('../models/user');
var jwt=require('jsonwebtoken');

//Get Comments //get route
router.get('/',function(req,res,next){
    Comment.find().populate('user','username').exec(function(err,comments){
        if(err){
            return res.status(500).json({
                    title:'Error',
                    error:err
            });//res status
        }//if err

        res.status(200).json({
            title:'Commments successfully retrieved from the Database',
            obj:comments
        });//res status 200
    });//comment find
});



//verifying token
router.use("/",function(req,res,next){
    jwt.verify(req.query.token,'secret',function(err,decoded){
        if(err){
            return res.status(401).json({
                title:'Error',
                error: err
            });
        }
        next();
    });
});



//Add a Comment //post route

router.post('/',function(req,res,next){
     var decoded=jwt.decode(req.query.token);
    User.findById(decoded.user._id,function(err,user){
            if(err){
                return res.status(500).json({
                    title:'Error',
                    error: err
                });
            }
    var comment=new Comment({
        comment:req.body.comment,
        user:user
    }); //new comment

    comment.save(function(err,result){
if(err){
    return res.status(500).json({
        title:'Error',
        error:err
    });//res status
}//if err
user.comments.push(result);
        user.save();

res.status(201).json({
    title:'Comment saved',
    obj:result
});//res status
    });//comment saved
}) ;//post route
});





module.exports=router;

