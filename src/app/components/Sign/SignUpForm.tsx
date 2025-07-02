"use client"

import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { isValidEmail, isValidPassword } from "../General/utils";
import toast from "react-hot-toast";

export default function SignUpForm() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        if (isValidEmail(email)) {
            if (isValidPassword(password)) {
                setStep(1);
                // Email verification and password creation logic goes here
            }
            else {
                toast.error("Password must be at least 8 characters long and contain at least one letter and one number.");
            }
        }
        else {
            toast.error("Please enter a valid email address.");
        }
    }

    return (
        <div className="w-full flex flex-col gap-4 max-md:pb-8 md:pr-4 max-md:border-b md:border-r border-foreground">
            {step === 0 ? (
                <>
                    <h1 className="text-2xl font-bold">Sign Up</h1>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium">Email</h2>
                        <Input onChange={(e: {
                            target: { value: string }
                        }) => setEmail(e.target.value)} maxLength={100} type="email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium">Password</h2>
                        <Input onChange={(e: {
                            target: { value: string }
                        }) => setPassword(e.target.value)} maxLength={100} minLength={8} type="password" />
                    </div>

                    <Button onClick={() => handleSignUp()} className="w-full">Sign Up</Button>
                </>
            ) :
                step === 1 ? (
                    <></>
                )
                    : (
                        <></>
                    )}
        </div>
    )
}