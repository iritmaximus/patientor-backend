import { v1 as uuid } from "uuid";

import patientData from "../../data/patients.json";
import { patientEntry, newPatientEntry } from "../types";
import { Gender } from "../types";

const getPatients = (): Omit<patientEntry, "ssn">[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => {
      return { id, name, dateOfBirth, gender, occupation };
  }) as Omit<patientEntry, "ssn">[];
};

const create = (patient: newPatientEntry): void => {
    const { name, dateOfBirth, gender, occupation, ssn } = patient;
    const newPatient = {
        id: uuid(),
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn
    } as patientEntry;

    patientData.push(newPatient);
};

export const toNewPatient = (object: unknown): newPatientEntry => {
    if (!object || typeof object !== "object") {
        throw Error("No object given");
    }

    if ("name" in object && "dateOfBirth" in object && "gender" in object && "occupation" in object && "ssn" in object) {
        const newPatient: newPatientEntry = {
            name: parseString(object.name),
            dateOfBirth: parseString(object.dateOfBirth),
            gender: parseGender(object.gender),
            occupation: parseString(object.occupation),
            ssn: parseString(object.ssn),
        };
        return newPatient;
    }
    throw Error("Incorrect data");
};

const parseString = (value: unknown): string => {
    if (typeof value === "string") {
        return value;
    }
    throw Error("Value is not a string");
}


const parseGender = (gender: unknown): Gender => {
    if (typeof gender === "string" && isGender(gender)) {
        return gender;
    }
    throw Error("Gender is not correct");
}

const isGender = (gender: string): gender is Gender => {
    return Object.values(Gender).map(item => item.toString()).includes(gender);
}

export default {
  getPatients,
  create,
};
