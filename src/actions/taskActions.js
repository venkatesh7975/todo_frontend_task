// Action creator to add a task
export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    };
};

// Action creator to delete a task
export const deleteTask = (taskId) => {
    return {
        type: 'DELETE_TASK',
        payload: taskId
    };
};

// Action creator to toggle the completion status of a task
export const toggleTask = (taskId) => {
    return {
        type: 'TOGGLE_TASK',
        payload: taskId
    };
};
