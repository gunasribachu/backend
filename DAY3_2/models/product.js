const mongoose = require("mongoose");

const productSchema=new  mongoose.Schema({
    name:{
        type:String,
        requried: true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    }
},{
    timestamps:true
});
module.exports=mongoose.model("Product",productSchema)