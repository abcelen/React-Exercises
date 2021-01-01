import React from 'react'

export default function IdCard(props) {
    const {lastname, firstName, gender, birth, picture} = props
    return (
    
        <div className = "userid">
          <p>Last Name: {lastname} </p> 
          <p>Name: {firstName} </p> 
          <p>Gender: {gender} </p> 
          <p>birth: {birth} </p> 
          <p>picture: {picture} </p> 
        </div>
    )
}
