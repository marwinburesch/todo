import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodo } from "../api/todos";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError(false);
    const todo = {
      title,
      author,
      createdAt: Date.now(),
    };
    try {
      await postTodo(todo);
      setTitle("");
      setAuthor("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </label>
        <input
          type="submit"
          value="Add task"
          disabled={!title || !author || loading}
        />
        {error && <p>Something bad happened 🤣. Please try again.</p>}
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTodo;
