import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions/taskActions';
import './TaskInput.css';

const TaskInput = () => {
    // State to hold the task input value and error message
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    // Function to handle adding a task
    const handleAddTask = () => {
        if (!task.trim()) {
            setError('Task cannot be empty');
            return;
        }

        dispatch(addTask(task));
        setTask('');
        setError('');
    };

    // Function to handle adding a task on Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        // Card container for the TaskInput component
        <div className="task-card">
            {/* Input field and button for adding tasks */}
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                        {/* Heading for the input field */}
                        <h1 className="text-center mb-4"><span className='my-task'>Create Task</span></h1>
                        {/* Task input field */}
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        {/* Error message */}
                        {error && <p className="text-danger"><span className='error'>{error}</span></p>}
                        {/* Add Task button */}
                        <button
                            className="btn btn-primary w-40 d-flex flex-row justify-content-end save"
                            type="button"
                            onClick={handleAddTask}
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
