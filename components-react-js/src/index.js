import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Class // 

// function Main(){
//   return <div>Manikandan</div>
// }

// class Second extends React.Component{
//   render(){
//       return <div> second </div>
//   }
// }

// class First extends React.Component{
//   render(){
//       return <div> first <Second /></div>
//   }
// }

// class Main extends React.Component{
//   render(){
//       return <div> Main <First /></div>
//   }
// }

// Props //

function First(props) {
  return (
    <div>Heyyy {props.name}</div>
  );
}

function SampleFun(props) {
  console.log("props", props);
  return <div>function {props.name} <First name={props.name}/></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SampleFun name="mani" age="21" />);





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
        // <App />
//   </React.StrictMode>
// );

