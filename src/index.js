import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakesList = ["lake one", "lake two", "lake three"];

function App( { lakes } ){
  return (
     <ul>
       {lakes.map(lake => (
         <li>{lake}</li>
       ))}
     </ul>
    
  );
}

ReactDOM.render(
  <App lakes={lakesList}/>,
  document.getElementById('root')
);


