"use client"

import Link from "next/link";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function Dropdown({
    title,
    items,
    id
}: {
    title: string;
    items: { label: string; href?: string; clickAction?: any; }[]
    id: string;
}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) return;

        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !event.composedPath().includes(dropdownRef.current)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            <div>
                <button onClick={() => setOpen(!open)}
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm p-2 text-sm font-medium  hover:bg-gray-50  focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    id={id}
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    {title}
                </button>
            </div>

            {open && (
                <div className="origin-top-right absolute right-0 mt-2 min-w-32 max-w-48 rounded-md shadow-lg border border-gray-300">
                    <div className="py-1 flex flex-col " role="menu" aria-orientation="vertical" aria-labelledby={id}>
                        {items.map((item, index) => item.href && (
                            <Link
                                key={index}
                                href={item.href}
                                className="w-full overflow-x-hidden text-ellipsis text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ) || item.clickAction && (<button
                            key={index}
                            onClick={() => {
                                setOpen(false);
                                item.clickAction();
                            }}
                            className="w-full cursor-pointer overflow-x-hidden text-ellipsis text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                        >
                            {item.label}
                        </button>))}
                    </div>
                </div>
            )}
        </div>
    );
}