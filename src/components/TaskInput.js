import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
    // State to hold the task input value
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    // Function to handle adding a task
    const handleAddTask = () => {
        // Dispatches an action to add the task
        dispatch(addTask(task));
        // Resets the task input value
        setTask('');
    };

    return (
        // Input field and button for adding tasks
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    {/* Heading for the input field */}
                    <h1 className="text-center mb-4">Create Task</h1>
                    {/* Task input field */}
                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Enter task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    {/* Add Task button */}
                    <button
                        className="btn btn-primary w-40 d-flex flex-row justify-content-end"
                        type="button"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskInput;
