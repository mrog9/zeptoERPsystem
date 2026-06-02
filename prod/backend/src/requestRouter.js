import express from "express";
import cors from "cors";
import { addNewUser } from "./requests/userRequests.js";

const app = express();
app.use(express.json());
const ENV_PORT = process.env.PORT || 3000;

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      "https://zeptoerpsystem.onrender.com"
    ];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"]
}));

app.post("/newuser", addNewUser);

app.listen(ENV_PORT, "0.0.0.0", () => {

    console.log(`Server running....`);

})
