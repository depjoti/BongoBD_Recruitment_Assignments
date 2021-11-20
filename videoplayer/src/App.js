// import logo from './logo.svg';
// import './App.css';

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

// export default App;

import React from 'react'
import ReactPlayer from 'react-player'
import './App.css'
function App () {
  return (
    <div className='App'>
      <ReactPlayer
        url={'sample.mp4'}
        //url='https://www.youtube.com/watch?v=kuirGzhGhyw&list=PLFKDYTlP3abzwWleHq1WHcKyi8nCPY74s&index=4'
        controls
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  )
}

export default App

//<ReactPlayer playing url={['foo.webm', 'foo.ogg']} />