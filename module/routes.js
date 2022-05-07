import  Express from "express";
import { insertToInventory } from "./gudang.js";


const GudangRouter = Express.Router()

GudangRouter.post("/inventory",insertToInventory)


export default GudangRouter;