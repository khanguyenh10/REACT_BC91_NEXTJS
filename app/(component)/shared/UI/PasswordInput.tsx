"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type Props = {
    name?: string;
    placeholder?: string;
    defaultValue?: string;
};

export default function PasswordInput({
    name = "password",
    placeholder = "Enter password",
    defaultValue = "",
}: Props) {
    const [show, setShow] = useState(false);

    return (
        <div className="form-control w-full">
            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    name={name}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className="input input-bordered w-full pr-10"
                    autoComplete="password"
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                    {!show ? (
                        <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                        <EyeIcon className="w-5 h-5" />
                    )}
                </button>
            </div>
        </div>
    );
}