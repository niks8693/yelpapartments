var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var schema=new Schema({
email:{type:String,required:true},
password:{type:String,required:true},
username:{type:String},
apartments:[{type:Schema.Types.ObjectId, ref:'Apartment'}],
comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]


});


module.exports=mongoose.model('User',schema);