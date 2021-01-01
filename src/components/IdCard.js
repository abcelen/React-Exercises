import React from 'react'

export default function IdCard(props) {
    const {lastname, firstName, gender, birth, picture} = props
    return (
        <div className="container">
    <div className = "row userid">
    <div className ="col-3">          <img src= {picture} alt="picture" class="img-thumbnail"/>  </div>
        <div className = "col-3">
          <p><b>Last Name: </b> {lastname} </p> 
          <p>Name: {firstName} </p> 
          <p>Gender: {gender} </p> 
          <p>birth: {birth} </p> 

        </div>
        </div>
        </div>
    )
}
