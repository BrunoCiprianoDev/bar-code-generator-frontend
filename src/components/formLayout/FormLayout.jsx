import React from "react";
import styles from "./FormLayout.module.css";

const FormLayout = ({ ...props }) => {
  return (
    <div className={styles["register-container"]} >
      <form onSubmit={(e) => handleSubmit(e)}>
        {props.children}
      </form>
    </div>
  );
};

export default FormLayout;
