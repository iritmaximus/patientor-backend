import patientData from "../../data/patients.json";
import { patientEntry } from "../types";

const getPatients = (): Omit<patientEntry, "ssn">[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => {
      return { id, name, dateOfBirth, gender, occupation };
  }) as Omit<patientEntry, "ssn">[];
};

export default {
  getPatients,
};
