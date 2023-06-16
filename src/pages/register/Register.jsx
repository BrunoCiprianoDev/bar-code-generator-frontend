import React from "react";

import styles from "./Register.module.css";

const formParameters = [
  { attribute: "name", label: "Nome", type: "text" },
  { attribute: "email", label: "E-mail",  type: "email" },
  { attribute: "cpf", label: "CPF",  type: "text" },
  { attribute: "isInternal", label: "Estuda no IF?", type: "text" },
  { attribute: "course", label: "Curso",  type: "password" },
];

const Register = () => {
  return (
    <div className={styles["register-container"]}>
      <form>
        {formParameters.map((parameter) => (
          <label htmlFor={`${parameter.attribute}Input`}>{parameter.label}
            {(() => {
                switch(parameter.type) {
                    case "text" :
                        return <input id={`${parameter.attribute}Input`} type={parameter.type} />;
                        case "text" :
                        return <input id={`${parameter.attribute}Input`} type={parameter.type} />;
                        case "text" :
                        return <input id={`${parameter.attribute}Input`} type={parameter.type} />;

                    default:
                        return null;
                }
            })()}
          </label>
        ))}
      </form>
    </div>
  );
};

export default Register;
