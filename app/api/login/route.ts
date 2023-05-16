import { signJwtAccessToken } from "@/lib/jwt";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  // TODO: Replace this with a real database call with firebase
  const user: any = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        username: "admin",
        password: bcrypt.hashSync("admin", 10),
        name: "Admin",
        role: "admin",
        email: "wolfremiuminformaticagmail.com",
      });
    }, 1000);
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else return new Response(JSON.stringify(null));
}
