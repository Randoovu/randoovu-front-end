"use client";

import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import Textarea from "../Textarea";
import toast from "react-hot-toast";

export default function ContactUs() {
    const [data, setData] = useState({
        name: "",
        message: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendData = async () => {
        setButtonDisabled(true);
        if (data.name.length < 3) {
            toast.error("Name must be between 3 and 30 characters.");
            return;
        }
        else {
            if (data.message.length < 5) {
                toast.error("Message must be between 5 and 500 characters.");
                return;
            }
            else {
                const formData = new FormData();
                formData.append("name", data.name);
                formData.append("message", data.message);

                await fetch("/api/contact", {
                    method: "POST",
                    body: formData
                }).then((res) => {
                    if (res.ok) {
                        toast.success("Message sent successfully!");
                        setData({ name: "", message: "" });
                        setIsSent(true);
                    } else {
                        toast.error("Failed to send message. Please try again later.");
                    }
                }).catch((err) => {
                    console.error(err);
                    toast.error("An error occurred while sending the message.");
                });
            }
        }
        setButtonDisabled(false);
    }

    return (
        <div className="w-full items-start flex flex-col gap-6 justify-between" id="contact-us">
            <div className="flex flex-col gap-4 w-full">
                <h2 className="text-xl md:text-2xl font-medium">Contact Us</h2>
                {
                    isSent ? <p className="text-gray-500">Your message has been sent successfully!</p> : <>
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="name" className="text-base font-medium">Name</label>
                            <Input defaultValue="" onChange={(e: { target: { value: string } }) => {
                                setData((d) => {
                                    return {
                                        ...d,
                                        name: e.target.value
                                    }
                                })
                            }} maxLength={30} minLength={3} type="text" id="name" />
                        </div>

                        <div className="flex h-[372px] flex-col gap-2 w-full">
                            <label htmlFor="message" className="text-base font-medium">Message</label>
                            <Textarea defaultValue="" onChange={(e: { target: { value: string } }) => {
                                setData((d) => {
                                    return {
                                        ...d,
                                        message: e.target.value
                                    }
                                })
                            }} maxLength={500} minLength={5} style={{ height: "270px", maxHeight: "270px" }} id="message" />
                        </div>

                        <Button disabled={buttonDisabled || data.name.length < 3 || data.message.length < 5} onClick={() => {
                            sendData();
                        }} className="w-full">Send</Button>
                    </>
                }
            </div>
        </div>
    )
}