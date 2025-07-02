import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignInPage() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="container flex max-md:flex-col gap-8 md:gap-4 shadow-lg p-8">
                <div className="w-full flex flex-col gap-4 max-md:pb-8 md:pr-4 max-md:border-b md:border-r border-foreground">
                    <h1 className="text-2xl font-bold">Sign In</h1>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium">Email</h2>
                        <Input maxLength={100} type="email" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium">Password</h2>
                        <Input maxLength={100} minLength={8} type="password" />
                    </div>

                    <Button className="w-full">Sign In</Button>
                </div>

                <div className="flex flex-col gap-4 md:w-64">
                    <h1 className="text-2xl font-bold">Don't you have an account?</h1>
                    <p className="text-base font-medium">Then, you can <Link href="/sign-up" className="text-primary font-bold underline">sign up!</Link></p>
                </div>
            </div>
        </div>
    )
}