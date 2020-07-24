import React from 'react';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  console.log("name")
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo list </h1>
          <br />
          <input type="text" placeholder="Add a Items" />
          <button> + </button>

          <ol>
            <li> buy apple </li>
          </ol>
        </div>
      </div>
    </>
  );
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
