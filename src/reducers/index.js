import { combineReducers } from 'redux';

// Initial state for the tasks array
const initialTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

// Reducer function for handling task-related actions
const taskReducer = (state = initialTasks, action) => {
    switch (action.type) {
        // Adds a new task to the state
        case 'ADD_TASK':
            return [...state, { text: action.payload, completed: false }];
        // Deletes a task from the state
        case 'DELETE_TASK':
            return state.filter((_, index) => index !== action.payload);
        // Toggles the completion status of a task
        case 'TOGGLE_TASK':
            return state.map((task, index) =>
                index === action.payload ? { ...task, completed: !task.completed } : task
            );
        // Default case returns the current state
        default:
            return state;
    }
};

// Combines all reducers into a single rootReducer
const rootReducer = combineReducers({
    tasks: taskReducer
});

export default rootReducer;
