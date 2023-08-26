import { TeamData } from "@/components/team/team";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function cssClasses(...args: string[]) {
  return args.join(" ");
}

export function joinObject<T>(arg1: T, arg2: Partial<T>) {
  return { ...arg1, ...arg2 };
}
export function deepCopy<T>(obj: T) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copiedObj: any = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copiedObj[key] = deepCopy(obj[key]);
    }
  }

  return copiedObj as T;
}

export const hasEmptyValues = (obj: any): boolean => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value === null || value === undefined || value === "") {
        return true; // Found an empty value
      }
    }
  }
  return false; // No empty values found
};
export const generateRandomToken = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    token += characters.charAt(randomIndex);
  }

  return token;
};

export function format_team_info_from_sheet(
  team_info: {
    Timestamp: string;
    "Email Address": string;
    "Email (Campus mail only).": string;
    "Name (With Initial)": string;
    "Index Number.": string;
    "Degree Program.": string;
    "Working Team.": string;
    "If you are Head of any Team": string;
    "If yes, mention the team name": string;
    "Upload Image.": string;
  }[]
) {
  const data: TeamData[] = [];

  team_info.forEach((team) => {
    //check if team available
    if (!data.some((obj) => obj.team_name == team["Working Team."])) {
      data.push({ team_name: team["Working Team."], members: [] });
    }

    const curr_team = data.find(
      (obj) => obj.team_name == team["Working Team."]
    );

    //creating member

    curr_team?.members.push({
      name: team["Name (With Initial)"],
      s_id: team["Index Number."],
      email: team["Email (Campus mail only)."],
      is_leader: team["If you are Head of any Team"] == "Yes",
    });
  });

  return data;
}
