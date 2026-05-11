"use client";
import { ChevronDoubleUpIcon } from '@heroicons/react/16/solid'
import React from 'react'

type Props = {}

const BackToTop = (props: Props) => {
    return (
        <a href="#" className="backToTop cd-top text-replace js-cd-top">
            <ChevronDoubleUpIcon />
        </a>

    )
}

export default BackToTop