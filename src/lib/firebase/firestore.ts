import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fire_config = require("/admin-sdk.json");

try {
  admin.initializeApp({
    credential: admin.credential.cert(fire_config),
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error("Firebase admin initialization error", error.stack);
  }
}
const firestore = getFirestore();

export default firestore;
export const memRef = firestore.collection("members");
export const teamsRef = firestore.collection("teams");
