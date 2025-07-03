import { cookies } from "next/headers";

export async function POST(request: Request) {
    const formData = await request.formData()
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };
    return Response.json({ message: "OK" }, { status: 200 });
};