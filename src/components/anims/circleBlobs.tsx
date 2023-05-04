import styles from "./anims.module.css";
export default function CircleBlobs({ count = 10 }) {
  return (
    <div className={styles.blob_circle_con}>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={styles.blob_circle} />
        ))}
    </div>
  );
}
