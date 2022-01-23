// imports, input can be type password

import { useState } from 'react';
import Item from '../item/Item'

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputData, setInputData] = useState('Enter a new to do!');

    const addTodo = () => {
        const newTodos = [...todos, inputData];
        setTodos(newTodos)
    }

    // const handleDelete = (index) => {
    //     setTodos((prev) => {
    //         const changedArray = prev.filter( _ , index => index != index);
    //         return changedArray
    //     })
    // }

    return (
        <div className='flexbox column center'>
            <h1>Todo</h1>
            <input type='text' value={inputData} onChange={(e) => setInputData(e.target.value)} />
            <br />
            <button onClick={addTodo}>Add Todo</button>
            <br />
            {
                todos.map((item, index) => {
                    return (
                        <Item done={false} key={index} item={item} />
                    )
                })
            }
        </div>
    );
}

export default Todo;