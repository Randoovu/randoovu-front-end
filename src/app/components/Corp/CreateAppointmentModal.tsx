"use client";

import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import Input from "../Input";
import toast from "react-hot-toast";

// IMPORTANT: Make sure your appointments are made at most every 30 minutes.
// IMPORTANT: Make sure date & time are valid and not in the past.

export default function CreateAppointmentModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (e.target.value === getTodayDate() && time < getCurrentTime()) {
      setTime("");
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    setButtonDisabled(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("time", time);

    const response = await fetch("/api/create-appointment", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Appointment created successfully");
      setName("");
      setDate("");
      setTime("");
      setShow(false);
    } else {
      toast.error("Failed to create an appointment");
      setButtonDisabled(false);
    }
  };

  const currentTime = getCurrentTime();
  return (
    <>
      <Button onClick={() => setShow(true)} className="h-10 md:max-w-48">
        Create Appointment
      </Button>

      <Modal isOpen={show} onClose={() => setShow(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Create Appointment</h2>
          <form className="flex flex-col gap-4">
            <label>
              Name:
              <Input
                value={name}
                onChange={handleNameChange}
                min={4}
                max={30}
                type="name"
                required
              />
            </label>
            <label>
              Date:
              <Input
                type="date"
                value={date}
                onChange={handleDateChange}
                min={getTodayDate()}
                required
              />
            </label>
            <label>
              Time:
              <Input
                type="time"
                value={time}
                onChange={handleTimeChange}
                min={currentTime}
                max="23:59"
                required
              />
            </label>

            <Button
              onClick={() => {
                if (name && date && time) {
                  if (time < currentTime || date === getTodayDate()) {
                    toast.error(
                      "You cannot create an appointment in the past."
                    );
                  } else {
                    handleSubmit();
                  }
                }
              }}
              disabled={!name || !date || !time || buttonDisabled}
              className="mt-4"
            >
              Create
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
