import React from "react";
import IdButton from "./IdButton";
import IdCard from "./IdCard";

const User = (props) => {
console.log(props.addNewUser)
return(
   
<div>
    <h2> Celen</h2>
{
    props.userId.map(userId => <IdCard 
        key ={userId.id}
        lastname = {userId.lastName} 
        firstName = {userId.firstName}
        gender = {userId.gender}
        birth = {userId.birth}
        picture = {userId.picture}
    />)
}
<div className="wrapper"><IdButton addNewUser={props.addNewUser}/></div>

    
</div>
)
}
export default User;
