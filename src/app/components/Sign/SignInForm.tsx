"use client"

import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

export default function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full flex flex-col gap-4 max-md:pb-8 md:pr-4 max-md:border-b md:border-r border-foreground">
            <h1 className="text-2xl font-bold">Sign In</h1>

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

            <Button className="w-full">Sign In</Button>
        </div>
    )
}