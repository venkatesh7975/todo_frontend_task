import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './App.css';

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
        <div className='main-card'>
            <h1 className='text-center heading'>
                <img src="https://www.quadbtech.com/images/QBT%20Logo%20Black.png" alt='quadbtech' />
                Todo List
            </h1>
            <div className='tasks-card'>
                <TaskInput />
                <TaskList />
            </div>
        </div>
    );
};

export default App;
