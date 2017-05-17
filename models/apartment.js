var mongoose=require('mongoose');
var User=require('./user');
var Schema=mongoose.Schema;
 var schema= new Schema({
title:{type:String,required:true},
price:{type:String,required:true},
imagePath:{type:String,required:true},
link:{type:String,required:true},
description:{type:String,required:true},
user: {type: Schema.Types.ObjectId, ref: 'User'}
 });

 schema.post('remove', function (apartment) {
    User.findById(apartment.user, function (err, user) {
        user.apartments.pull(apartment);
        user.save();
    });
});

 module.exports=mongoose.model('Apartment',schema);