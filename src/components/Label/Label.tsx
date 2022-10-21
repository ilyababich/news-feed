import classnames from "classnames";
import { ESize } from "./consts";

import styles from "./Label.module.css";

type TLabel = {
  isLoading: boolean;
  text: JSX.Element;
  skeletonSize: ESize;
};

const sizesMap = {
  [ESize.S]: styles.small,
  [ESize.M]: styles.medium,
};

const Label = (props: TLabel) => {
  const { isLoading, text, skeletonSize } = props;

  if (isLoading) {
    return (
      <div className={classnames(styles.loader, sizesMap[skeletonSize])} />
    );
  }

  return <>{text}</>;
};

export default Label;
