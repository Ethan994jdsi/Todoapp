import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
