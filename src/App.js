import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    const dispatch = useDispatch();

    // Retrieves tasks from local storage on component mount
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            // Dispatches an action to set tasks from local storage
            dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) });
        }
    }, [dispatch]);

    return (
        // Renders the Todo List app
        <div>
            <h1 className='text-center text-white bg-success'>Todo List</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
