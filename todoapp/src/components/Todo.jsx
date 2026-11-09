import { useState } from "react";
import Todoitem from "./Todoitem";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((item) => (
          <Todoitem key={item} item={item} />
        ))}
      </ul>
    </div>
  );
}
