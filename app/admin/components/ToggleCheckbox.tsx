import React from 'react'

type Props = {
    isChecked: boolean,
    name: string
}

const ToggleCheckbox = ({ isChecked, name }: Props) => {
    return (
        <>

            <input type="checkbox" defaultChecked={isChecked} defaultValue={"true"}
                name={name} className="toggle toggle-primary" />
        </>
    )
}

export default ToggleCheckbox