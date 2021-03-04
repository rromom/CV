import React from 'react'
import Menu from '../components/Menu';


export default function BasicLayaout(props) {
    const {children, MenuColor} = props;
    return (
        <div>
            <Menu MenuColor={MenuColor}  />
            {children}
        </div>
    )
}
