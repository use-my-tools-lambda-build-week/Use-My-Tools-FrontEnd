import React from 'react';
import { HomeView } from './views';
import { BackDrop } from './styles/BaseStyling'

function App() {
  return (
    <BackDrop>
      <HomeView />
    </BackDrop>
    
  );
}

export default App;
