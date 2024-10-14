import express from "express";
import shortnerRoute from "./routes/shortner.route";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors())


app.use("/api/controller/shortner", shortnerRoute);

app.listen(port, () => {
  console.log("server started at port : ", port);
});
