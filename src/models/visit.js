import mongoose from 'mongoose';
//import {stringify} from "querystring";

const visitSchema= new mongoose.Schema(
    {

tourName:String,
    // required: true,

tourLocation:String,
    // required:true,
    // enum:["Musanze","Gisenyi","Karongi","Nyanza","Nyungwe"],
   

price:Number,
seats:Number,
dateScheduled:String,
duedate:String,
// images:{
//     type: String,
// }
user:{
    type:mongoose.Schema.ObjectId,
ref:"User",
}

}
    

);
visitSchema.pre(/^find/,function (next){
    this.populate({
        path:"user",
        select:"lastName email address"
    }),
    next();
} )

const visit =mongoose.model('Tour',visitSchema);

export default visit;