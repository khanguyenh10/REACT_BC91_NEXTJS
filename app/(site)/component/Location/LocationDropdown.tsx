"use client";

import { LocationVM } from "@/app/(viewModel)/LocationVM";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState } from "react";

export default function LocationDropdown({ locations }: { locations: LocationVM[] }) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="dropdown w-full">
            <div
                tabIndex={0}
                role="button"
                className="btn w-full justify-between border-0 bg-white  shadow-none hover:shadow-none pl-0 "
            >
                {selected || "Bạn sắp đi đâu?"}
                <span>
                    <ChevronDownIcon className="w-4 h-4" />
                </span>
            </div>

            <ul className="dropdown-content menu bg-white rounded-box z-10 w-full p-2 shadow">
                {locations.map((loc) => (
                    <li key={loc.id}>
                        <button
                            onClick={() => {
                                setSelected(loc.tenViTri);
                                (document.activeElement as HTMLElement)?.blur();
                            }}
                            className="flex items-center gap-2"
                        >
                            <Image
                                src={loc.hinhAnh}
                                alt={loc.tenViTri}
                                width={125}
                                height={125}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="location-name">{loc.tenViTri}</span>

                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}