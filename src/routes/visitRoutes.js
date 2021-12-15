import express from "express";

import visitController from "../controllers/visitControllers";
import Validator from "../middlewares/validator";

const VisitRouter =express.Router();

VisitRouter.post("/Create",Validator.newTourRules(),
Validator.validateInput, visitController.createTour)
VisitRouter.get("/allTours", visitController.getAllTours)
VisitRouter.get("/:id", visitController.getOneTour)
VisitRouter.delete("/:id", visitController.deletOneTour)

export default VisitRouter;