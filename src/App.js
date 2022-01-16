// IMPORTS
import { useState } from 'react'; // alows you to edit variables and re-render the site in real-time 
import Todo from './components/todoapp/Todo';

function App() { // called a component
  // JS UP HERE
  const age = 3;

  // Button below
  const [count, setCount] = useState(0); // count = var name, setCount = the function you want to use to change count
  const addOne = (count) => {
    setCount(count + 1);
  }
  return ( // returns JSX - implementing JS in HTML
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>addOne(count)}>Count</button> 
      {/* if your function takes in a parameter (as shown above) you have to use an anonymous function */}

      <Todo /> {/* you can also do <Todo> <Todo/>*/}
    </div>
  );
}

export default App;
