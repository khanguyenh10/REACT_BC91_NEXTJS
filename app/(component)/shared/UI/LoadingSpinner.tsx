import React from 'react'

type Props = {}

const LoadingSpinner = (props: Props) => {
    return (
        <span>
            <span className="loading loading-spinner "></span>
            loading
        </span>
    )
}

export default LoadingSpinner