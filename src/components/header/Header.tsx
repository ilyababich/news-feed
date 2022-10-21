import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { TITLE } from "./consts";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.layout}>
      <AiOutlineMenu className={styles.icon} />
      <h1 className={styles.title}>{TITLE}</h1>
      <AiOutlineUser className={styles.icon} />
    </div>
  );
};

export default Header;
