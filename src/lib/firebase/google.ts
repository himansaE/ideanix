import { createReadStream, existsSync, writeFileSync } from "fs";
import { google } from "googleapis";

const createKeyFile = () => {
  if (existsSync(`${__dirname}/service-account-key-file.json`)) return;
  const NEXT_PUBLIC_GOOGLE = process.env.NEXT_PUBLIC_GOOGLE;
  writeFileSync(
    `${__dirname}/service-account-key-file.json`,
    NEXT_PUBLIC_GOOGLE ?? ""
  );
};

export const authenticateGoogle = () => {
  createKeyFile();
  const auth = new google.auth.GoogleAuth({
    keyFile: `${__dirname}/service-account-key-file.json`,
    scopes: "https://www.googleapis.com/auth/drive",
  });

  return auth;
};

export const uploadToGoogleDrive = async (
  file: string,
  auth: any,
  filename: string
) => {
  const requestBody = {
    name: filename,
    parents: ["1N51jK9gIIyCzNyj6ROrkhuITl9_NXVAH"],
  };
  const media = {
    mimeType: "application/pdf",
    body: createReadStream(file),
  };

  const driveService = google.drive({ version: "v3", auth });

  const response = await driveService.files.create({
    requestBody: requestBody,
    media: media,
    fields: "id",
  });

  return response;
};
