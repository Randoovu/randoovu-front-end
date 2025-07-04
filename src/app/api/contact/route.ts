export async function POST(request: Request) {
    const formData = await request.formData()
    const data = {
        name: formData.get("name") as string,
        message: formData.get("message") as string,
    };
    return Response.json({ message: "OK" }, { status: 200 });
};