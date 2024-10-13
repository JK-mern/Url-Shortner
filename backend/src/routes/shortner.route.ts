import express from "express"
import { createShortendUrl, getOriginalUrl } from "../controller/shortner.controller"


const router = express.Router()

router.post("/create" , createShortendUrl)
router.get("/get/:url" , getOriginalUrl)



export default router