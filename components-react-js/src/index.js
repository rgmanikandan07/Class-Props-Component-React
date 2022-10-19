import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// function Main(){
//   return <div>Manikandan</div>
// }
class Second extends React.Component{
  render(){
      return <div> second </div>
  }
}

class First extends React.Component{
  render(){
      return <div> first <Second /></div>
  }
}

class Main extends React.Component{
  render(){
      return <div> Main <First /></div>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

