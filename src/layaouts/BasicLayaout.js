import React from 'react'

export default function BasicLayaout(props) {
    const {children} = props;
    return (
        <div>
            <h1>MENU</h1>
            {children}
        </div>
    )
}
