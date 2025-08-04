"use client";

import { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { isValidEmail, isValidPassword } from "../General/utils";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();
  const signIn = async () => {
    setButtonDisabled(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch("/api/sign-in", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Signed in successfully!");
      router.push("/dashboard");
    } else {
      toast.error("Failed to sign in. Please check your credentials.");
      setButtonDisabled(false);
    }
  };

  console.log(isValidEmail(email), isValidPassword(password), "TEST");

  return (
    <div className="w-full flex flex-col gap-4 max-md:pb-8 md:pr-4 max-md:border-b md:border-r border-gray-300">
      <h1 className="text-2xl font-bold">Sign In</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <Input
          id="email"
          onChange={(e: { target: { value: string } }) =>
            setEmail(e.target.value)
          }
          maxLength={100}
          type="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-lg font-medium">
          Password
        </label>
        <Input
          id="password"
          onChange={(e: { target: { value: string } }) =>
            setPassword(e.target.value)
          }
          maxLength={100}
          minLength={8}
          type="password"
        />
      </div>

      <Button
        disabled={
          buttonDisabled || !isValidEmail(email) || !isValidPassword(password)
        }
        onClick={() => {
          !buttonDisabled && isValidEmail(email) && isValidPassword(password);
          signIn();
        }}
        className="w-full"
      >
        Sign In
      </Button>
    </div>
  );
}
