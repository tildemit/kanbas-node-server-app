import express from "express";
import Lab5 from "./lab5.js";
import cors from "cors";
const app = express();
app.use(cors());
Lab5(app);
app.listen(4000);