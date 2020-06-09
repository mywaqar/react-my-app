import React from 'react';
import './App.css';


function App(props) {
    return <div> 
            <p>Hello, <strong>{props.fullName}</strong><br/>Your family tree is here</p>
            <hr/>
            <h3>Parents</h3>
            <ul>
                <li>Mr. Aftab Ahmed </li>
                <li>Mrs. Shagufta Tabassam</li>
           </ul>
           <hr/>
           <h3>Siblings</h3>
           <ol>
               <li>Waqar Azeem</li>
               <li>Abrar Ahmed</li>
               <li>Amina Aftab</li>
               <li>Umer Aftab</li>
               <li>Mohammed Fahad</li>
           </ol>
          </div>
    };

export default App;
