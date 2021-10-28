import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


if(process.env.NODE_ENV !=='development'){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}else{
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  );
}

// console.log(process.env)
// console.log(process.env.NODE_ENV)
// console.log(process.env.REACT_APP_URL)
// console.log(process.env.REACT_APP_API_KEY)
