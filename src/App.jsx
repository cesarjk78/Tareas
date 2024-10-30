// src/App.jsx
import React from 'react';
import TaskList from './TaskList'; // Importa el componente TaskList

function App() {
    return (
        <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
            <TaskList />
        </div>
    );
}

export default App;
