import mongoose from 'mongoose';

const userSchema= new mongoose.Schema(
    {
firstName:String,
lastName:String,
email:{
    type: String,
    required: true,
},
password:{
    type:String,
    required:true,
    unique:true,
},
address:{
    type:String,
    default:"Rwanda",
},
gender:{
    type:String,
    enum:["male", "female","other"],
},
role:{
    type:String,
    default:"user",
    enum:["admin","user"],
}


}
);

const users =mongoose.model('User',userSchema);
export default users;