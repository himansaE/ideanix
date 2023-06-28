import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
let fire_config;
try {
  fire_config = require("/admin-sdk.json");
} catch {
  fire_config = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE ?? "");
}
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

export const storage = getStorage();
export const bucket = storage.bucket("my-bucket");
export default firestore;
export const memRef = firestore.collection("members");
export const teamsRef = firestore.collection("teams");
