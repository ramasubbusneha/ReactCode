import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value, priority);
            setValue('');
            setPriority('low');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder='What is the task today?'
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
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );
};
