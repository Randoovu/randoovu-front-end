import Link from "next/link";

export default function Header() {
    const links = [
        {
            href: "#about-us",
            title: "About Us"
        },
        {
            href: "#contact-us",
            title: "Contact Us"
        },
        {
            href: "/",
            title: "View Source"
        }
    ]
    return (
        <header className="w-full md:h-16 py-4 h-32 flex justify-center max-md:px-4 bg-foreground/5">
            <div className="container flex justify-between gap-4 flex-wrap max-sm:flex-col items-center">
                <h1 className="text-2xl font-extrabold text-primary">Randoovu</h1>

                <div className="flex gap-4 items-center ">
                    {links.map((linkItem, i) => {
                        return (
                            <Link key={i} href={linkItem.href} className="hover:text-primary duration-100 text-base font-medium">{linkItem.title}</Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}