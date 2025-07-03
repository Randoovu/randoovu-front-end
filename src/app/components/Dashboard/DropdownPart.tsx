"use client"

import { useRouter } from "next/navigation";
import Dropdown from "../Dropdown"

export default function DropdownPart({ account }: { account: { email: string, id: string } }) {
    const router = useRouter();
    const signOut = async () => {
        const cookieStore = await fetch("/api/sign-out", {
            method: "POST"
        });
        if (cookieStore.ok) {
            router.push("/");
        } else {
            console.error("Failed to sign out");
        }
    }

    return (
        <div className="flex gap-2 items-center font-medium text-base">
            <Dropdown title="Account" id="account" items={[{
                label: account.email, href: `#`
            }, {
                label: "Sign Out", clickAction: signOut
            }]} />
        </div>
    )
}