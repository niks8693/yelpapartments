var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    comment:{type:String,required:true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports=mongoose.model('Comment',schema);