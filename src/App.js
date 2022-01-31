// IMPORTS
import { useState } from 'react'; // alows you to edit variables and re-render the site in real-time 
import Todo from './components/todoapp/Todo';
import Warmup from './components/warmups/Warmup';

function App() { // called a component
  return ( // returns JSX - implementing JS in HTML
    <div className="App">
      <Todo />
      <br />
      <Warmup />
    </div>
  );
}

export default App;
