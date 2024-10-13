import express from "express"
import { createUrl, getOriginalUrl } from "../controller/shortner.controller"


const router = express.Router()

router.post("/create", createUrl)
router.get("/get/:url" , getOriginalUrl)



export default router