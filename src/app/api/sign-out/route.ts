import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return Response.json({ message: "OK" }, { status: 200 });
};