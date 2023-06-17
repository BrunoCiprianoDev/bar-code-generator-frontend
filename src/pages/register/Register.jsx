import React from "react";
import { useState } from "react";
import FormLayout from "../../components/formLayout/FormLayout";

const Register = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    cpf: "",
    isInternal: false,
    course: "Não faz parte da instituição",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <FormLayout>
      <h2>Cadastro</h2>
      <label htmlFor="nameInput">
        Nome
        <input
          id="nameInput"
          value={student.name}
          onChange={(e) => {
            setStudent({ ...student, name: e.target.value });
          }}
          type="text"
        />
      </label>
      <label htmlFor="emailInput">
        Email
        <input
          id="emailInput"
          value={student.email}
          onChange={(e) => {
            setStudent({ ...student, email: e.target.value });
          }}
          type="email"
        />
      </label>
      <label htmlFor="cpfInput">
        CPF
        <input
          id="cpfInput"
          value={student.cpf}
          onChange={(e) => {
            setStudent({ ...student, cpf: e.target.value });
          }}
          type="text"
        />
      </label>
      <label>
        Aluno da instituição?
        <div>
          <input
            type="radio"
            name="isInternal"
            value="true"
            checked={student.isInternal}
            onChange={(e) => {
              setStudent({
                ...student,
                isInternal: e.target.value === "true",
              });
            }}
          />
          Sim
        </div>
        <div>
          <input
          onClick={()=>{}}
            type="radio"
            name="isInternal"
            value="false"
            checked={!student.isInternal}
            onChange={(e) => {
              setStudent({
                ...student,
                isInternal: e.target.value === "true",
              });
            }}
          />
          Não
        </div>
      </label>
      {student.isInternal === true && (
        <label htmlFor="courseInput">
          Curso
          <select
            onChange={(e) => {
              setStudent({ ...student, course: e.target.value });
            }}
          >
            <option value={"curso 1"}>Curso 1</option>
            <option value={"curso 2"}>Curso 2</option>
            <option value={"curso 3"}>Curso 3</option>
            <option value={"curso 4"}>Curso 4</option>
            <option value={"curso 5"}>Curso 5</option>
          </select>
        </label>
      )}

      <input type="submit" />
    </FormLayout>
  );
};

export default Register;
