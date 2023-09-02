import express from "express";
import cors from "cors";

import diagnoseService from "./services/diagnoseService";


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
    res.json({"message": "pong"});
});

app.get("/api/diagnoses", (req, res) => {
    const diagnoses = diagnoseService.getDiagnoses();
    res.json({"diagnoses": diagnoses});
});

app.listen(PORT, () => {
    console.log("server running on port", PORT);
});
