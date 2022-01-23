// IMPORTS
import { useState } from 'react'; // alows you to edit variables and re-render the site in real-time 
import Todo from './components/todoapp/Todo';

function App() { // called a component
  return ( // returns JSX - implementing JS in HTML
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
