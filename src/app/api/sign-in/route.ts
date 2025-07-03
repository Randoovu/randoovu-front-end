import { cookies } from "next/headers";

export async function POST() {
    const token = "test";
    const cookieStore = await cookies();
    cookieStore.set("token", token, { httpOnly: true, secure: true });
    return Response.json({ message: "OK" }, { status: 200 });
};