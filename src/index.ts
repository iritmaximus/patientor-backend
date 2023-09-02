import express from "express";
import cors from "cors";


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
    res.json({"message": "pong"});
});

app.listen(PORT, () => {
    console.log("server running on port", PORT);
});
