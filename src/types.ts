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
  gender: "male" | "female" | "other";
  occupation: string
}
