/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormItems } from "../form";
import firestore, { memRef, teamsRef } from "./firestore";

export function formatFromFromItem(data: FormItems) {
  const members = [];
  for (let i = 1; i <= 3; i++) {
    members.push({
      id: (data[`id_${i}` as keyof FormItems] as string).trim().toUpperCase(),
      name: (data[`name_${i}` as keyof FormItems] as string).trim(),
      batch: (data[`batch_${i}` as keyof FormItems] as string).trim(),
      school: (data[`school_${i}` as keyof FormItems] as string).trim(),
      phone: (data[`phone_${i}` as keyof FormItems] as string).trim(),
      email: (data[`email_${i}` as keyof FormItems] as string).trim(),
    });
  }
  const team = {
    name: data.team_name.trim(),
  };
  return Object.freeze({ team, members });
}

export async function putDataToFirestore(
  data: ReturnType<typeof formatFromFromItem>
) {
  const batch = firestore.batch();
  const mem_refs = [];

  for (const i of data.members) {
    const ref = memRef.doc(i.id);
    batch.set(ref, i);
    mem_refs.push(ref);
  }

  const team = teamsRef.doc(data.team.name);
  batch.set(team, {
    name: data.team.name,
    leader: mem_refs[0],
    members: [mem_refs[1], mem_refs[2]],
  });

  for (const i of data.members) {
    const ref = memRef.doc(i.id);
    batch.update(ref, { team: team });
  }
  await batch.commit();
}
