import { bucket } from "@/lib/firebase/firestore";
import { generateRandomToken } from "@/lib/lib";
import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { Fields, Files } from "formidable";
import { readFileSync } from "fs";
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("method not Allowed");
  }

  const form = formidable({ keepExtensions: true });

  let formData;

  try {
    formData = await new Promise<{ fields: Fields; files: Files }>(
      (resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) return reject(err);
          resolve({ fields, files });
        });
      }
    );
  } catch {
    res.send({ error: true, error_text: "p" });
    return;
  }

  if (!formData?.files?.file) return res.send({ error: true, error_text: "p" });

  const fileData = Array.isArray(formData.files.file)
    ? formData.files.file[0]
    : formData.files.file;

  const file = readFileSync(fileData.filepath);

  const token = generateRandomToken(60);
  const tempRef = bucket.file("temp/" + token + ".pdf");
  const tempWriteStream = tempRef.createWriteStream();
  tempWriteStream.write(file, (error) => {
    if (error) {
      res.send({ error: true, error_data: error });
    } else {
      res.send({
        error: false,
        token: token,
      });
    }
  });
}
