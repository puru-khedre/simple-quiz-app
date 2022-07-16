import { useState } from "react";
import SignForm from "../../components/SignForm";
import styles from "./page.module.css";

const Authentication = () => {
  let [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.tabs}>
          <button
            className={isLogin ? styles.selected : undefined}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={!isLogin ? styles.selected : undefined}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <SignForm isLogin={isLogin} styles={styles} />
        <hr />
        <button className={styles.btn__google}>
          {isLogin ? "Log in " : "Sign up "} with google
        </button>
      </div>
    </div>
  );
};

export default Authentication;
