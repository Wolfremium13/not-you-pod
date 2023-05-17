import { db } from "@/lib/firebase";
import * as bcrypt from "bcrypt";
import { randomUUID } from "crypto";
import { addDoc, collection } from "firebase/firestore/lite";

interface RequestBody {
  username: string;
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const { username, name, email, password }: RequestBody = await request.json();
  const userUUID = randomUUID();
  const encryptedPassword = await bcrypt.hash(password, 10);
  await addDoc(collection(db, "users"), {
    username: username,
    name: name,
    email: email,
    password: encryptedPassword,
    role: "user",
    id: userUUID,
  });
  const body = {
    username: username,
    name: name,
    email: email,
    role: "user",
    id: userUUID,
  };
  return new Response(JSON.stringify(body));
}
