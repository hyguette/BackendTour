import mongoose from 'mongoose';
//import {stringify} from "querystring";

const visitSchema= new mongoose.Schema(
    {

tourName:{
    type: String,
    required: true,
},
tourLocation:{
    type:String,
    required:true,
    enum:["Musanze","Gisenyi","Karongi","Nyanza","Nyungwe"],
   

},
price:{
    type:Number,
   required:true,
},
seats:{
    type:Number,
    unique:true,

},
dateScheduled:String,

duedate:String,
// images:{
//     type: String,
// }


    
    }

)

const visit =mongoose.model('Tour',visitSchema);

export default visit;