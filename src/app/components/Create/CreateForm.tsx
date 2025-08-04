"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Textarea from "@/app/components/Textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function CreateForm() {
  const router = useRouter();

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    maxAppointmentCapacity: 5,
  });

  const [weeklySchedule, setWeeklySchedule] = useState(
    daysOfWeek.map((day) => ({
      day,
      enabled: false,
      startTime: "09:00",
      endTime: "17:00",
    }))
  );

  const handleScheduleChange = (index: number, field: string, value: any) => {
    const updated: any = [...weeklySchedule];
    updated[index][field] = field === "enabled" ? value.target.checked : value;
    setWeeklySchedule(updated);
  };

  const handleSubmit = async () => {
    setButtonDisabled(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append(
      "maxAppointmentCapacity",
      data.maxAppointmentCapacity.toString()
    );
    formData.append("weeklySchedule", JSON.stringify(weeklySchedule));

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
        {/* Title */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <Input
            onChange={(e: { target: { value: string } }) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
            minLength={4}
            maxLength={50}
            required
            id="title"
            type="text"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 h-[228px]">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <Textarea
            onChange={(e: { target: { value: string } }) =>
              setData((prev) => ({ ...prev, description: e.target.value }))
            }
            required
            maxLength={150}
            minLength={5}
            style={{ height: "200px", maxHeight: "200px" }}
            id="message"
          />
        </div>

        {/* Max Capacity */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="maxCapacity"
            className="block text-sm font-medium text-gray-700"
          >
            Max Appointment Capacity (1 to 10000)
          </label>
          <Input
            onChange={(e: { target: { value: string } }) =>
              setData((prev) => ({
                ...prev,
                maxAppointmentCapacity: Number(e.target.value),
              }))
            }
            className="!w-[100px]"
            min={1}
            max={10000}
            defaultValue={5}
            required
            id="maxCapacity"
            type="number"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <label className="text-sm font-medium text-gray-700">
            Weekly Open Days and Hours
          </label>
          {weeklySchedule.map((dayItem, index) => (
            <div
              key={dayItem.day}
              className="flex items-center gap-4 border border-gray-300 p-2 rounded-md"
            >
              <input
                type="checkbox"
                checked={dayItem.enabled}
                onChange={(e) => handleScheduleChange(index, "enabled", e)}
              />
              <span className="w-24">{dayItem.day}</span>
              <label>
                Start:
                <input
                  type="time"
                  value={dayItem.startTime}
                  disabled={!dayItem.enabled}
                  onChange={(e) =>
                    handleScheduleChange(index, "startTime", e.target.value)
                  }
                  className="ml-2"
                />
              </label>
              <label>
                End:
                <input
                  type="time"
                  value={dayItem.endTime}
                  disabled={!dayItem.enabled}
                  onChange={(e) =>
                    handleScheduleChange(index, "endTime", e.target.value)
                  }
                  className="ml-2"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button
        disabled={
          buttonDisabled ||
          data.title.length < 4 ||
          data.description.length < 5 ||
          data.maxAppointmentCapacity < 1 ||
          weeklySchedule.every((day) => !day.enabled)
        }
        onClick={handleSubmit}
      >
        Create
      </Button>
    </>
  );
}
