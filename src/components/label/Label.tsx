import classnames from "classnames";
import { ESize } from "./consts";

import styles from "./Label.module.css";

type TLabel = {
  text: JSX.Element;
  isLoading?: boolean;
  skeletonSize?: ESize;
};

const sizesMap = {
  [ESize.S]: styles.small,
  [ESize.M]: styles.medium,
  [ESize.L]: styles.large,
};

const Label = (props: TLabel) => {
  const { text, isLoading = false, skeletonSize = ESize.S } = props;

  if (isLoading) {
    return (
      <div
        data-testid="label-skeleton"
        className={classnames(styles.loader, sizesMap[skeletonSize])}
      />
    );
  }

  return <>{text}</>;
};

export default Label;
