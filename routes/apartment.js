var express=require('express');
var router=express.Router();
var Apartment=require('../models/apartment');
var User=require('../models/user');
var jwt=require('jsonwebtoken');

//Apartments Get Route

router.get("/",function(req,res,next){
    Apartment.find()
    .populate('user','username').exec(function(err,apartments){
        if(err){
            return res.status(500).json({
                title:'Error',
                error:err
            });//res status
        }//if err
        res.status(200).json({
            title:'Apartments Successfully Retrieved from the Database',
            obj:apartments
        });//res status 200 Apartments Retrieved

    });//apartment find
});// get route

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






//Apartment Post Route
router.post("/",function(req,res,next){
    var decoded=jwt.decode(req.query.token);
    User.findById(decoded.user._id,function(err,user){
            if(err){
                return res.status(500).json({
                    title:'Error',
                    error: err
                });
            }
var apartment=new Apartment({
    title:req.body.title,
    price:req.body.price,
    imagePath:req.body.imagePath,
    link:req.body.link,
    description:req.body.description,
    user:user

}); // new Apartment

apartment.save(function(err,result){
if(err){
    return res.status(500).json({
        title:'Error',
        error:err
    }); 
}// if err
user.apartments.push(result);
        user.save();

res.status(201).json({
    title:'Apartment Saved',
    obj:result
}); //apt saved


}); //func 
}); //post route
});


//Apartment Update Route

router.patch("/:id",function(req,res,next){
    var decoded = jwt.decode(req.query.token);
Apartment.findById(req.params.id,function(err,apartment){
        if(err){
            return res.status(500).json({
                title:'Error',
                error: err
            });//res status
        }//if err
        if(!apartment){
            return res.status(500).json({
                title:'Error',
                error: {message:'Apartment Not Found'}
            });//res status
        }//!apartment
        if(apartment.user!=decoded.user._id){
            return res.status(401).json({
                title:'Error',
                error: {message:'Users do not match'}
            });
        }//user match code
        apartment.title=req.body.title;
        apartment.price=req.body.price;
        apartment.link=req.body.link;
        apartment.imagePath=req.body.imagePath;
        apartment.description=req.body.description;
        apartment.save(function(err,result){
            if(err){
                return res.status(500).json({
                    title:'Error',
                    error: err
                });//res status
            }//if err
            res.status(200).json({
                title:'Apartment Updated',
                obj: result
            });//res status
        });//apartment saved

});//find by id
}); //patch route

// Apartment Delete Route

// router.delete("/:id",function(req,res,next){
//     Apartment.findByIdAndRemove(req.params.id,function(err){
//         if(err){
//             return res.status(500).json({
//                 title:'Error',
//                 error:err
//             });
//         }//if err
//         res.status(200).json({
//             title:'Apartment Deleted',
//             obj:{message:'Apartment Deleted Successfully from the DB'}
//         });//res status
//     });//apartment remove
// });

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Apartment.findById(req.params.id, function (err, apartment) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!apartment) {
            return res.status(500).json({
                title: 'Error!',
                error: {message: 'Apartment not found'}
            });
        }
        if (apartment.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authenticated',
                error: {message: 'Users do not match'}
            });
        }
        apartment.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Apartment Deleted',
                obj: result
            });
        });
    });
});


module.exports = router;