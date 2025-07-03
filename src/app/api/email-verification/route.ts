import { cookies } from "next/headers";

export async function POST(request: Request) {
    const formData = await request.formData()
    const code = formData.get("code") as string
    const token = "test";
    const cookieStore = await cookies();
    cookieStore.set("token", token, { httpOnly: true, secure: true });
    return Response.json({ message: "OK" }, { status: 200 });
};