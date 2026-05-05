"use client";
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {}

const ActionUsers = (props: Props) => {
    return (
        <>
            <button className="btn btn-sm btn-warning text-warning-content">
                <PencilIcon className="w-4 h-4" />
            </button>
            <button className="btn btn-sm  btn-error text-error-content">
                <TrashIcon className="w-4 h-4" />
            </button>
        </>
    )
}

export default ActionUsers