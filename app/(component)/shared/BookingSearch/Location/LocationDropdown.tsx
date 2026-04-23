"use client";

import useRedux from "@/(hook)/useRedux";
import useRouting from "@/(hook)/useRouting";
import { setLocationAt } from "@/(redux)/reducer/userReducer";
import { LocationVM } from "@/(viewModel)/LocationVM";
import { stringToSlug } from "@/utils/text";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LocationDropdown({ locations }: { locations: LocationVM[] }) {
    const { params } = useRouting();
    const { dispatch } = useRedux();
    const [selected, setSelected] = useState<string | null>(null);
    useEffect(() => {
        if (params?.cityName) {
            const selectedLocation = locations.find(loc => stringToSlug(loc.tinhThanh) === params.cityName);
            if (selectedLocation) {
                dispatch(setLocationAt({ id: selectedLocation.id, tinhThanh: selectedLocation.tinhThanh }));
                setSelected(selectedLocation.tinhThanh);
            }
        }
    }, [params, locations]); ``
    return (
        <div className="dropdown w-full">
            <div
                tabIndex={0}
                role="button"
                className="btn w-full justify-between border-0 bg-white text-gray-500 shadow-none hover:shadow-none pl-0 h-auto"
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
                                setSelected(loc.tinhThanh);
                                (document.activeElement as HTMLElement)?.blur();
                            }}
                            className="flex items-center gap-2"
                        >
                            <Image
                                src={loc.hinhAnh}
                                alt={loc.tinhThanh}
                                width={125}
                                height={125}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="location-name text-gray-500">{loc.tinhThanh}</span>

                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
