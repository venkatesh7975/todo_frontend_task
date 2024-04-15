import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../actions/taskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
    // Accessing the tasks state from the Redux store
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    // Function to handle deleting a task
    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    // Function to handle toggling the completion status of a task
    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

  
    // Function to save the tasks to local storage
    const handleSaveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        // Bootstrap container to center the content
        <div className="container">
            <h1 className="text-center my-4">My Tasks</h1>
            <ul className="list-group" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {tasks.map((task, index) => (
                    <li key={index} className={`list-group-item ${task.completed ? 'bg-light' : ''}`}>
                        <div className="d-flex align-items-center">
                            {/* Checkbox for marking task as completed */}
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(index)}
                            />
                            {/* Label for displaying task text with strike-through if completed */}
                            <label className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`}>{task.text}</label>
                            {/* Icon button for deleting a task */}
                            <button className="btn btn-link text-danger ms-auto" onClick={() => handleDeleteTask(index)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary mt-3" onClick={handleSaveTasks}>Save</button>
        </div>
    );
};

export default TaskList;
