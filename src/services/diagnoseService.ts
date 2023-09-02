import diagnoseData from "../../data/diagnoses.json";
import { diagnosisEntry } from "../types";


export const getDiagnoses = (): diagnosisEntry[]  => {
  console.info("diagnose data:", diagnoseData);
  return diagnoseData as diagnosisEntry[];
};

export default {
  getDiagnoses,
};
