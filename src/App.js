import React from 'react';
import './App.css';
import User from './components/User';

 const userId = [{
        id:1,
        lastName:'Doe',
        firstName:'John',
        gender:'male',
        height:178,
        birth:"1992,7,14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        id:2,
        lastName:'Durrant',
        firstName:'Alex',
        gender:'male',
        height:178,
        birth:"1994-07-14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg"
    }
    ]
function App() {
      const addNewUser=()=>{
console.log("this is to add a new user")
      }
  return (
    <div className="App">
     <User userId = {userId} addNewUser={addNewUser}/>
    </div>
  );
}

export default App;
