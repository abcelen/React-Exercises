import React from "react";
import IdCard from "./IdCard";

const User = (props) => {

return(
   
<div>
    <h2> Celen</h2>
{
    props.userId.map(userId => <IdCard 
        lastname = {userId.lastName} 
        firstName = {userId.firstName}
        gender = {userId.gender}
        birth = {userId.birth}
        picture = {userId.picture}
    />)
}

    
</div>
)
}
export default User;
