import styles from "./BundleItemSkeleton.module.css";

const BundleItemSkeleton = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.image}></div>
      <div className={styles.label}></div>
      <div className={styles.label}></div>
    </div>
  );
};

export default BundleItemSkeleton;
