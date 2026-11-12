import Todoitem from "./Todoitem";
export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <Todoitem key={item} item={item} />
      ))}
    </div>
  );
}
