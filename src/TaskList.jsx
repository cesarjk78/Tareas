// src/TaskList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    useEffect(() => {
        // Reemplaza con la URL de tu API de Django
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = (event) => {
        if (event.key === 'Enter' && task.trim()) {
            setTasks([...tasks, { id: tasks.length + 1, title: task }]); // Simular agregar tarea
            setTask('');
        }
    };

    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <input
                type="text"
                placeholder="Ingresa tus tareas"
                value={task}
                onChange={handleInputChange}
                onKeyDown={handleAddTask}
                style={{ padding: '10px', width: '80%', marginBottom: '20px' }}
            />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {tasks.map((task, index) => (
                    <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                        <span style={{ padding: '10px', border: '1px solid #ccc', width: '200px' }}>{task.title}</span>
                        <button onClick={() => handleRemoveTask(index)} style={{ marginLeft: '10px' }}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
