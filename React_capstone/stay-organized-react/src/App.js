import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './Components/ToDoList';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import NewTodoForm from './Components/NewTodoForm';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Register from './Components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="main flex-grow-1">
        <Header />
        <Routes>
          <Route path="/new-todo" element={<NewTodoForm />} />
          <Route path="/user-todos" element={<ToDoList />} />
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
