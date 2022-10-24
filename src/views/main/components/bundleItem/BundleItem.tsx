import styles from "./BundleItem.module.css";

type TBundleItem = {
  title: string;
  label: string;
  imageUrl: string;
  link: string;
};

const BundleItem = (props: TBundleItem) => {
  const { title, label, imageUrl, link } = props;

  return (
    <div className={styles.layout}>
      <a className={styles.link} href={link}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageUrl} alt="Description..." />
        </div>
        <p className={styles.label}>{label}</p>
        <p className={styles.title}>{title}</p>
      </a>
    </div>
  );
};

export default BundleItem;
