import {check,validationResult} from "express-validator";

class Validator{

    static validateInput= (req,res,next)=>{

        const errors =validationResult(req);
        if (!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({message: errorMessage});
        }
        return next();

    };


    static newAccountRules(){
        return [
            check("email","email is invalid").trim().isEmail(),
            check("password","password is not stong").trim().isStrongPassword(),
            check("lastName","Last name should be valid").trim().isAlpha(),
            check("firstName","First name should be valid").trim().isAlpha(),
            check("gender", "Gender should be valid among male, female,other").trim().isIn(["male","female","other"]),
           
        
        ]
    }
        static newTourRules(){
            return[

            check("tourName", "Tour name should be valid").trim().isString(),
            check("tourLocation","Tour location should be valid").trim().isString(),
            check("price", "price should be valid").trim().isNumeric(),
            check("seats", "seats should be valid").trim().isNumeric(),
            check("dateScheduled", "Datescheduled should be valid").trim().isDate(),
            check("duedate", "Duedate should be valid").trim().isDate(),
            ]
        };

      


  

}


export default Validator;