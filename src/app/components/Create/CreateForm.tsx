"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Textarea from "@/app/components/Textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CreateForm() {
    const router = useRouter();

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        maxAppointmentCapacity: 5,
    });

    const handleSubmit = async () => {
        setButtonDisabled(true);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("maxAppointmentCapacity", data.maxAppointmentCapacity.toString());

        const response = await fetch("/api/create-base", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            toast.success("Appointment base created successfully");
            router.push("/dashboard");
        } else {
            toast.error("Failed to create appointment base");
            setButtonDisabled(false);
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <Input onChange={(e: { target: { value: string; } }) => {
                        setData((prev: any) => ({
                            ...prev,
                            title: e.target.value
                        }));
                    }} minLength={4} maxLength={50} required id="title" type="text" />
                </div>

                <div className="flex flex-col gap-2 h-[228px]">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <Textarea onChange={(e: { target: { value: string; } }) => {
                        setData((prev: any) => ({
                            ...prev,
                            description: e.target.value
                        }));
                    }} required maxLength={150} minLength={5} style={{ height: "200px", maxHeight: "200px" }} id="message" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Max Appointment Capacity {"(1 to 10000)"}</label>
                    <Input onChange={(e: { target: { value: string; } }) => {
                        setData((prev: any) => ({
                            ...prev,
                            maxAppointmentCapacity: e.target.value
                        }));
                    }} className="!w-[100px]" min={1} max={10000} defaultValue={5} required id="title" type="number" />
                </div>
            </div>
            <Button
                disabled={
                    buttonDisabled ||
                    data.title.length < 4 ||
                    data.description.length < 5 ||
                    data.maxAppointmentCapacity < 1
                }
                onClick={() => {
                    if (!buttonDisabled && data.title.length >= 4 && data.description.length >= 5 && data.maxAppointmentCapacity >= 1) {
                        handleSubmit();
                    }
                }}
            >
                Create
            </Button>
        </>
    )
}