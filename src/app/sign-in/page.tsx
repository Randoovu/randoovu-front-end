import Link from "next/link";
import SignInForm from "../components/Sign/SignInForm";

export default function SignInPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="container flex max-md:flex-col gap-8 md:gap-4 shadow-lg p-8">
                <SignInForm />

                <div className="flex flex-col gap-4 md:w-64">
                    <h1 className="text-2xl font-bold">Don't you have an account?</h1>
                    <p className="text-base font-medium">Then, you can <Link href="/sign-up" className="text-primary font-bold underline">sign up!</Link></p>
                </div>
            </div>
        </div>
    )
}