import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDolist.css'; // Import the CSS file for styling

const ToDolist = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await axios.post('/api/todos', { text: inputValue });
        setTodos([...todos, response.data]);
        setInputValue('');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  
};

export default ToDolist;
