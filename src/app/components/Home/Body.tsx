import Link from "next/link"
import Button from "../Button"

export default function Body() {
    const list = ["Free", "Fast", "Easy"]
    return (
        <div className="container flex flex-wrap justify-between items-center md:h-[calc(100vh-64px)] h-[calc(100vh-128px)] max-md:px-4 py-6">
            <div className="flex flex-col gap-4">
                <h1 className="md:text-5xl text-3xl font-medium">Create Appointments.</h1>
                <div className="flex gap-2">
                    {
                        list.map((item, i) => {
                            return (
                                <p className="md:text-2xl text-xl font-medium" key={i}>{item},</p>
                            )
                        })
                    }
                    <p className="text-primary md:text-2xl text-xl font-bold">Open-source.</p>
                </div>

                <div className="flex gap-2 mt-4">
                    <Link href="/sign-up">
                        <Button type="outline" className="w-32">Get Started</Button>
                    </Link>

                    <Link href="/sign-in">
                        <Button className="w-32">Sign In</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}