import config from "../config";
import getSheetsData from "./WinnerSheets";

export const getData = async () => {
  return await getSheetsData(config.resultSheetId, "2");
};

export const dataKeys = {
  teams: "Teams",
  wins: "Wins",
};
