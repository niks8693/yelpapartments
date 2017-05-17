var express=require("express");
var router=express.Router();
var User=require("../models/user");
var jwt=require("jsonwebtoken");
var bcrypt=require("bcryptjs");


router.post('/signup',function(req,res,next){
    var user=new User({
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,10),
        username:req.body.username
    });//user

    user.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:'Error',
                error: err
            });//res status
        }//iff err

        res.status(500).json({
            title:'User Created',
            obj:result
        });//res status
    });//user saved

});//signup route

//signin route
router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'Error',
                error: err
            });//res status
        } //if err
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });//res status
        }// if no user
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });//res status
        } //bcrypt compare
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});


module.exports=router;