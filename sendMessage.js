import { collection, addDoc } from "firebase/firestore";
import db from "./firebaseConfig";

async function sendMessage(name, message) {
  try {
    await addDoc(collection(db, "messages"), {
      name: name,
      message: message,
      timestamp: new Date(),
    });
    console.log("Pesan berhasil dikirim!");
  } catch (error) {
    console.error("Gagal menyimpan pesan: ", error);
  }
}
