import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Pane, Text } from 'evergreen-ui'
import { AppBar } from './AppBar'


function App() {
  return (
    <div className="App">
      <Pane
        height={870}




        
        width='100%'
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
      >
        <Pane position="absolute" display="flex" justifyContent="space-between" top={20} height={0} width='auto' >
          <AppBar />

        </Pane>

      </Pane>
    </div>
  );
}

export default App;
