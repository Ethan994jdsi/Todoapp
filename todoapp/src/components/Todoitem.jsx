import styles from "./todoitem.module.css";
export default function Todoitem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
}
