import styles from "./Button.module.css";
export default function Button(props: { onClick: (() => void) | null; children: string }) {
  const { onClick, children } = props;
  return (
    <button className={styles.button} onClick={() => onClick}>
      {children}
    </button>
  );
}
