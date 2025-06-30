import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t max-md:px-4 flex justify-center py-4 border-foreground w-full mt-8">
            <div className="container flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-primary">Randoovu</h1>


                <Link className="md:text-xl text-lg text-foreground cursor-pointer rounded-lg font-medium duration-150 hover:bg-primary/20 p-1"
                    target="_blank"
                    href="https://github.com/Yefee8">
                    Made by Yefee
                </Link>
            </div>
        </footer>
    )
}