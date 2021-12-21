import express from "express";

import visitController from "../controllers/visitControllers";
import Validator from "../middlewares/validator";
import verifyAccess from"../middlewares/verifyaccess";
import verifyToken from "../middlewares/veriftToken"

const VisitRouter =express.Router();

VisitRouter.post("/Create",
verifyToken,
verifyAccess
("admin"),
Validator.newTourRules(),
Validator.validateInput, 
visitController.createTour);
VisitRouter.get("/allTours", visitController.getAllTours)
VisitRouter.get("/:id", visitController.getOneTour)
VisitRouter.delete("/:id", visitController.deletOneTour)

export default VisitRouter;