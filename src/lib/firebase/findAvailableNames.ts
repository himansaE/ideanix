import { CollectionReference } from "firebase-admin/firestore";

export async function findAvailableNames(
  names: string[],
  ref: CollectionReference
) {
  const name_snap = await ref.get();
  names = names.map((i) => i.toUpperCase().trim());
  const ava_names: string[] = [];
  name_snap.docs.forEach((i) => {
    if (names.includes(i.id.toUpperCase())) {
      ava_names.push(names[names.indexOf(i.id.toUpperCase())]);
    }
  });
  return ava_names;
}
