export interface diagnosisEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface patientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type newPatientEntry = Omit<patientEntry, "id">;

export enum Gender {
    Male = "male",
    Female = "female",
    Other = "other",
}
