import { cookies } from "next/headers";

export async function POST(request: Request) {
    const formData = await request.formData()
    const data = {
        title: formData.get("title") as string,
        maxAppointmentCapacity: formData.get("maxAppointmentCapacity") as string,
        description: formData.get("description") as string,
        weeklySchedule: JSON.parse(formData.get("weeklySchedule") as string),
    };
    
    return Response.json({ message: "OK" }, { status: 200 });
};