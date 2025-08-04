import Link from "next/link";
import SignUpForm from "../components/Sign/SignUpForm";

export default function SignUpPage() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="container flex max-md:flex-col gap-8 md:gap-4 shadow-lg p-8">
                <SignUpForm />

                <div className="flex flex-col gap-4 md:w-64">
                    <h1 className="text-2xl font-bold">Do you already have an account?</h1>
                    <p className="text-base font-medium">Then, you can <Link href="/sign-in" className="text-primary font-bold underline">sign in!</Link></p>
                </div>
            </div>
        </div>
    )
}