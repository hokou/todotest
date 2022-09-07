import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Home from './pages/home';
import Login from './pages/home/components/Login';
import Register from './pages/home/components/Register';
import Todo from './pages/todo/index';

import { Routes, Route, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <HashRouter>
            <Routes>
                <Route element={<Home />}>
                    <Route path='/' element={<Login />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
                <Route path='todo' element={<Todo />} />
            </Routes>
        </HashRouter>
    </div>
);