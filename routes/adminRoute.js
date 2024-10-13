import express from "express";
const adminRoute = express.Router()
import { adminController } from "../controllers/adminController.js";

adminRoute.get("/getContactData", adminController)

export default adminRoute;