import express from "express";
import cors from "cors";

import diagnoseService from "./services/diagnoseService";
import patientService, { toNewPatient } from "./services/patientService";
import { newPatientEntry } from "./types";


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/ping", (_req, res) => {
    res.json({"message": "pong"});
});

app.get("/api/diagnoses", (_req, res) => {
    const diagnoses = diagnoseService.getDiagnoses();
    res.json({"diagnoses": diagnoses});
});

app.get("/api/patients", (_req, res) => {
    const patients = patientService.getPatients();
    res.send(patients);
});

app.post("/api/patients", (req, res) => {
    try {
        const newPatient: newPatientEntry = toNewPatient(req.body);
        patientService.create(newPatient);
    } catch (e) {
        console.error("Patient creation failed");
        res.status(404).json({"error": "patient creation failed"});
        return;
    }
    res.send("patient created");
});

app.listen(PORT, () => {
    console.log("server running on port", PORT);
});
