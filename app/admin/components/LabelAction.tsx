import React from 'react'

type Props = {
    action: "ADD" | "EDIT" | null
    children: React.ReactNode
}

const LabelAction = ({ action, children }: Props) => {
    return (
        <>
            {action === "ADD" ? "Thêm" : "Cập nhật"}
            {children}
        </>
    )
}

export default LabelAction