import { teamsRef } from "@/lib/firebase/firestore";
import { findAvailableNames } from "@/lib/firebase/findAvailableNames";
import { NextApiRequest, NextApiResponse } from "next";

// if member ID is available in the database It will return 1 else return 0
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query["id"] as string;
  if (name == undefined) return res.status(400).send("");
  const ava = await findAvailableNames([name], teamsRef);
  if (ava.length == 0) return res.send(0);
  res.send(1);
}
