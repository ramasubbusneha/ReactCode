import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);
    const [priority, setPriority] = useState(task.priority);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, priority, task.id);
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='Update task'
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="priority-select"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    );
};
