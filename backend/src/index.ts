import express from 'express'
import shortnerRoute from "./routes/shortner.route"

const port = 5000
const app = express()


app.listen (port, () =>{
    console.log("server started at port : ", port);
})

app.use("/api/controller/shortner",shortnerRoute)