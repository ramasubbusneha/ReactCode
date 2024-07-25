import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    const priorityClass = `priority-${task.priority}`;

    return (
        <div className={`Todo ${priorityClass}`}>
            <p
                className={task.completed ? 'completed' : 'incompleted'}
                onClick={() => toggleComplete(task.id)}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon
                    className="edit-icon"
                    icon={faPenToSquare}
                    onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon
                    className="delete-icon"
                    icon={faTrash}
                    onClick={() => deleteTodo(task.id)}
                />
            </div>
        </div>
    );
};
