import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForms"; // Corrected import
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo, priority) => {
        const newTodos = [
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false, priority }
        ];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    const startEditing = (id) => {
        setEditingId(id);
    };

    const editTask = (task, priority, id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, task, priority, isEditing: false } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setEditingId(null);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredTodos = todos.filter(todo =>
        todo.task.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                placeholder="Search tasks..."
            />
            <TodoForm addTodo={addTodo} />
            {filteredTodos.map((todo) =>
                todo.id === editingId ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        deleteTodo={deleteTodo}
                        editTodo={startEditing}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
};
