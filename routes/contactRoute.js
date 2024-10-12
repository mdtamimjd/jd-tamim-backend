import express from "express";
import { contactController } from "../controllers/contactController.js";
const contactRoute = express.Router()

contactRoute.post('/contactPost', contactController)

export default contactRoute;

