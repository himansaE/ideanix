// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { memRef } from "@/lib/firebase/firestore";
import { findAvailableNames } from "@/lib/firebase/findAvailableNames";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const names = (req.query["id"] as string).split(",");
  const ava = await findAvailableNames(names, memRef);
  res.send(ava);
}
