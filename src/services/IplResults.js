import config from "../config";
import getSheetsData from "./sheets";

export const getData = async (year) => {
  return await getSheetsData(config.resultSheetId, "1", year);
};

export const dataKeys = {
  id: "id",
  season: "season",
  city: "city",
  date: "date",
  team1: "team1",
  team2: "team2",
  toss_winner: "toss_winner",
  toss_decision: "toss_decision",
  result: "result",
  dl_applied: "dl_applied",
  winner: "winner",
  winbyruns: "win_by_runs",
  win_by_wickets: "win_by_wickets",
  player_of_match: "player_of_match",
  venue: "venue",
  umpire1: "umpire1",
  umpire2: "umpire2",
  umpire3: "umpire3",
};
