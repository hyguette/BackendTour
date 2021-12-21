import visitInfos from "../models/visit";

class VisitController{

    //create tour in db

    static async createTour(req,res){
        req.body.user=req.user._id;
        const tours= await  visitInfos.create(req.body);

        if(!tours){
            return res.status(404).json({error:"tour not registered"})
        }
        return res.status(200).json({message:"tour created successfully", data: tours});
    }

    // get all tour in db


static async getAllTours(req,res){
    const tours= await  visitInfos.find();

    if(!tours){
        return res.status(404).json({error:"Tour not successfully"})
    }
    return res.status(200).json({message:" Tour successfully", data: tours});
}
 //get one tour in db
static async getOneTour(req,res){
    const tours= await visitInfos.findById(req.params.id);

    if(!tours){
        return res.status(404).json({error:"tour not found"});
    }
    return res.status(200).json({message:"tour found", data:tours});
}
// // delete one tour in db
static async deletOneTour(req,res){
    const tours= await visitInfos.findByIdAndDelete(req.params.id);

    if(!tours){
        return res.status(404).json({error:"tour not found to delete"});
    }
    return res.status(200).json({message:"tour deleted Well"});
}
//to update one tour in db
}
export default VisitController; 