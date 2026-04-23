import React from 'react'

type Props = {}

const loading = (props: Props) => {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <span className="loading loading-dots  loading-xl text-white"></span>
        </div>
    );
}

export default loading