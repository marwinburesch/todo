import React from "react";
import { getTodos } from "../api/todos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <div>
      <Link to="/add">Add Todo</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Home;
