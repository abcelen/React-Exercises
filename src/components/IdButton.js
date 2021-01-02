import React from 'react'

export default function IdButton(props) {
    const addButton = () =>{
        props.addNewUser()
    }
    return (
        <div>
            <button onClick={addButton} type="button" className="btn btn-primary">Primary</button>
        </div>
    )
}
