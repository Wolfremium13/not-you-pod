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
  const body: RequestBody = await request.json();
  // const docRef = await addDoc(collection(db, "users"), {
  //   username: body.username,
  //   name: body.name,
  //   email: body.email,
  //   password: await bcrypt.hash(body.password, 10),
  //   role: "user",
  //   id: randomUUID(),
  // });
  // console.log(docRef)

  // const { password, ...result } = user;
  return new Response(JSON.stringify(body));
}
