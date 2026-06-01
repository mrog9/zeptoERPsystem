import express from "express";
import cors from "cors";
import { addNewUser } from "./requests/userRequests.js";

const app = express();
app.use(express.json());
const PORT = 3000;

app.use(cors({

    origin: ["http://frontend:80", "https://zeptoerpsystem.onrender.com"],
    methods: ['POST', 'GET']

}))

app.post("/newuser", addNewUser);

app.listen(PORT, "0.0.0.0", () => {

    console.log(`Server running....`);

})
