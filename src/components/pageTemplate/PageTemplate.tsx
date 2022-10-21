import Header from "../header";

import styles from "./PageTemplate.module.css";

type TPageTemplate = {
  children: JSX.Element;
};

const PageTemplate = (props: TPageTemplate) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageTemplate;
