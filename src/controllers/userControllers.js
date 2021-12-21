import userInfos from "../models/user";
import bcrypt from "bcrypt";
import TokenAuth from "../helpers/tokenAuth";

class UserController{

    //create user in db

    static async createUser(req,res){
        const hashPassword = await bcrypt.hashSync(req.body.password,10)
        req.body.password= hashPassword;
        const users= await  userInfos.create(req.body);

        if(!users){
            return res.status(404).json({error:"user not registered"})
        }
        return res.status(200).json({message:"User created successfully", data: users});
    }

    // get all user in db


static async getAllUsers(req,res){
    const users= await  userInfos.find();

    if(!users){
        return res.status(404).json({error:"user not successfully"})
    }
    return res.status(200).json({message:" user successfully", data: users});
}
 //get one user in db
static async getOneUser(req,res){
    const users= await userInfos.findById(req.params.id);

    if(!users){
        return res.status(404).json({error:"user not found"});
    }
    return res.status(200).json({message:"user found", data:users});
}
// delete one user in db
static async deletOneUser(req,res){
    const users= await userInfos.findByIdAndDelete(req.params.id);

    if(!users){
        return res.status(404).json({error:"user not found to delete"});
    }
    return res.status(200).json({message:"user deleted"});
}

// //login function
static async userLogin(req,res){

    const user= await userInfos.findOne({email: req.body.email});

    if(!user){ 
    return res.status(404).json({error: "user not found"});
    }
    if(bcrypt.compareSync(req.body.password, user.password)){
        user.password=null;
        const token=TokenAuth.tokenGenerator({user:user});
        return res.status(200).json({message:"SUccessfuly logged in", token:token});
    }
        return res.status(400).json({error:"Password is wrong"});
    }
}
export default UserController; 