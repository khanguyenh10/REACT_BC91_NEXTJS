import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
    return (
        <div>
            <h1>admin layout</h1>
            {props.children}
        </div>
    )
}

export default layout