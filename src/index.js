import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello({library, number}){
  return (
  <div>
  <h1>Welcome to React!!!</h1>
  <p>This is coolio!!!</p>
  <p>{library} is the library</p>
  <p>The number is {number}</p>
  </div>
  );
}

ReactDOM.render(
  <Hello library="React" number={3}/>,
  document.getElementById('root')
);


