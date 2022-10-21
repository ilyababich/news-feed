import Label, { ESize } from "../../../../components/Label";

import styles from "./BundleDescription.module.css";

export type TBundleDescription = {
  title: string | null;
  description: string | null;
  label: string | null;
};

const BundleDescription = (props: TBundleDescription) => {
  const { title, description, label } = props;

  return (
    <div className={styles.layout}>
      <Label
        isLoading={!label}
        text={<p className={styles.label}>{label}</p>}
        skeletonSize={ESize.S}
      />
      <Label
        isLoading={!title}
        text={<h1 className={styles.title}>{title}</h1>}
        skeletonSize={ESize.M}
      />
      <Label
        isLoading={!description}
        text={<p>{description}</p>}
        skeletonSize={ESize.M}
      />
    </div>
  );
};

export default BundleDescription;
