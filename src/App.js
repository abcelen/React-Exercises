import React from 'react';
import './App.css';
import User from './components/User';

function App() {
       const userId = [{
        lastName:'Doe',
        firstName:'John',
        gender:'male',
        height:178,
        birth:"1992-07-14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
        lastName:'Durrant',
        firstName:'Alex',
        gender:'male',
        height:178,
        birth:"1994-07-14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg"
    }
    ]
  return (
    <div className="App">
     <User userId = {userId}/>
    </div>
  );
}

export default App;
