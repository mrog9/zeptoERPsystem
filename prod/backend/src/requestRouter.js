import express from "express";
import cors from "cors";
import { addNewUser } from "./requests/userRequests.js";

const app = express();
app.use(express.json());
const ENV_PORT = 8080;
const FRONT_URL = process.env.FRONT_URL

app.use(cors({

    origin: [FRONT_URL],
    methods: ['POST', 'GET']

}))

app.post("/newuser", addNewUser);

app.listen(ENV_PORT, "0.0.0.0", () => {

    console.log(`Server running....`);

})
