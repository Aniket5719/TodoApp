import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/todos", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTodos(res.data);
      } catch (error) {
        setMessage(error.response?.data?.message || "Failed to fetch todos");
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Todos</h1>
      {message && <p className="text-red-500">{message}</p>}
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className="mb-2">
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
