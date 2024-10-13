import express from "express";
const contactRoute = express.Router()
import { contactController } from "../controllers/contactController.js";

contactRoute.post('/contactPost', contactController)

export default contactRoute;

