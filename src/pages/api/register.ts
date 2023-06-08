import { memRef, teamsRef } from "@/lib/firebase/firestore";
import { findAvailableNames } from "@/lib/firebase/findAvailableNames";
import { verifyRecaptchaToken } from "@/lib/firebase/recaptcha";
import { FormItems, validateFormData } from "@/lib/form";
import { NextApiRequest, NextApiResponse } from "next";
import { getClientIp } from "request-ip";
import {
  formatFromFromItem,
  putDataToFirestore,
} from "@/lib/firebase/createData";

export default async function Register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== "POST")
    return res.status(405).send({
      error: true,
      text: "Invalid method. Try contacting developer.",
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: FormItems = {} as FormItems;

  // check body is valid json
  try {
    data = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).send({
      error: true,
      text: "Invalid Body. Try contacting developer.",
    });
  }

  // verify recaptcha token
  const validate = await verifyRecaptchaToken(
    data.token,
    getClientIp(req) ?? ""
  );
  if (validate.error)
    return res.status(400).send({
      error: true,
      text: validate.err_text,
    });

  // check something missing
  if (!validateFormData(data))
    return res.status(400).send({
      error: true,
      text: "Please fill the required details.",
    });

  // check team name available
  if ((await findAvailableNames([data.team_name], teamsRef)).length != 0)
    return res.status(400).send({
      error: true,
      text: `Team name ${data.team_name} already available. Try another one.`,
    });

  //check members already registered

  const av_mem = await findAvailableNames(
    [data.id_1, data.id_2, data.id_3],
    memRef
  );
  if (av_mem.length != 0)
    return res.status(400).send({
      error: true,
      text: `${av_mem.join(", ")} ${
        av_mem.length == 1 ? "is" : "members are"
      } already registered.`,
    });

  // put data into register form

  const formatted_data = formatFromFromItem(data);
  await putDataToFirestore(formatted_data);

  // successfully registered
  return res.status(200).send({
    error: false,
    text: "",
  });
}
