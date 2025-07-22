import { cookies } from "next/headers";

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = {
    name: formData.get("name") as string,
    date: formData.get("date") as string,
    time: formData.get("time") as string,
  };
  return Response.json({ message: "OK" }, { status: 200 });
}
