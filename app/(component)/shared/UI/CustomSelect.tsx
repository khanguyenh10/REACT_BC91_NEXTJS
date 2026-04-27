"use client";

import { useEffect, useRef, useState } from "react";

type Option = {
    label: string;
    value: string;
};

type Props = {
    options: Option[];
    value?: string;
    placeholder?: string;
    onChange: (value: string) => void;
};

export default function CustomSelect({
    options,
    value,
    placeholder = "Select...",
    onChange,
}: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selected = options.find((o) => o.value === value);

    console.log(value, selected, options);
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative w-full">
            {/* Trigger */}
            <div
                onClick={() => setOpen((prev) => !prev)}
                className=" select select-bordered w-full cursor-pointer flex items-center justify-between"
            >
                <span className={selected ? "" : "text-gray-400"}>
                    {selected?.label || placeholder}
                </span>
            </div>

            {/* Dropdown */}
            {open && (
                <ul className="absolute z-50 mt-2 w-full bg-white border border-base-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                            className={`
                px-4 py-2 cursor-pointer hover:bg-secondary
              `}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}