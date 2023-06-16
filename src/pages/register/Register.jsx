import React from "react";
import { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  const [student, setStudent] = useState({ name: "", email: "", cpf: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student)
  }

  return (
    <div className={styles["register-container"]}>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="nameInput">
          Nome
          <input
            id="nameInput"
            value={student.name}
            onChange={(e) => {setStudent({ ...student, name: e.target.value })}}
            type="text"
          />
        </label>
        <label htmlFor="emailInput">
          Email
          <input 
          id="emailInput"
          value={student.email}
          onChange={(e) => {setStudent({...student, email: e.target.value })}} 
          type="email" 
          />
        </label>
        <label htmlFor="cpfInput">
          CPF
          <input 
          id="cpfInput" 
          value={student.cpf}
          onChange={(e) => {setStudent({...student, cpf: e.target.value })}} 
          type="text" 
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
