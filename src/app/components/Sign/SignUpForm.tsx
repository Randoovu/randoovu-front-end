"use client"

import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { isValidEmail, isValidPassword } from "../General/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [code, setCode] = useState("");

    const router = useRouter();

    const handleValidStep = async (props: { currentStep: number, email: string, password: string, code: string }) => {
        if (props.currentStep === 0) {
            const formData = new FormData();
            formData.append("email", props.email);
            formData.append("password", props.password);

            const response = await fetch("/api/sign-in", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Email sent! Please check your inbox for the verification code.");
                setStep(1);
            } else {
                toast.error("Please check your internet connection.");
            }
        }
        else {
            const formData = new FormData();
            formData.append("code", code);

            const response = await fetch("/api/email-verification", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Email verified successfully! You are being redirected to the main page.");
                setTimeout(() => {
                    router.push("/dashboard");
                }, 2000);
            }

            else {
                toast.error("Verification failed. Please check the code you entered.");
            }
        }
    }
    const handleSignUp = () => {
        setButtonDisabled(true);
        if (step === 0) {
            if (isValidEmail(email)) {
                if (isValidPassword(password)) {
                    handleValidStep({
                        currentStep: step,
                        email: email,
                        password: password,
                        code: code
                    });
                }
                else {
                    toast.error("Password must be at least 8 characters long and contain at least one letter and one number.");
                }
            }
            else {
                toast.error("Please enter a valid email address.");
            }

            setButtonDisabled(false);
        }

        else if (step === 1) {
            if (code.length === 6) {
                handleValidStep({
                    currentStep: step,
                    email: email,
                    password: password,
                    code: code
                });
            }
            else {
                toast.error("Please enter a valid 6-digit code.");
            }
        }
    }

    return (
        <div className="w-full flex flex-col gap-4 max-md:pb-8 md:pr-4 max-md:border-b md:border-r border-gray-300">
            {step === 0 ? (
                <>
                    <h1 className="text-2xl font-bold">Sign Up</h1>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-lg font-medium">Email</label>
                        <Input id="email" onChange={(e: {
                            target: { value: string }
                        }) => setEmail(e.target.value)} maxLength={100} type="email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-lg font-medium">Password</label>
                        <Input id="password" onChange={(e: {
                            target: { value: string }
                        }) => setPassword(e.target.value)} maxLength={100} minLength={8} type="password" />
                    </div>

                    <Button onClick={() => handleSignUp()} className="w-full">Sign Up</Button>
                </>
            ) : (
                <>
                    <div className="flex flex-col gap-2">

                        <h1 className="text-2xl font-bold">Verify Email</h1>

                        <p className="text-lg font-medium">We have sent a code to your email.</p>
                    </div>


                    <div className="">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="code" className="text-lg font-medium">Code</label>
                            <Input id="code" defaultValue="" onChange={(e: {
                                target: { value: string }
                            }) => setCode(e.target.value)} minLength={6} maxLength={6} type="text" />
                        </div>
                    </div>

                    <Button disabled={buttonDisabled} onClick={() => { !buttonDisabled && handleSignUp() }} className="w-full">Verify</Button>
                </>
            )}
        </div>
    )
}