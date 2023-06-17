import React from "react";
import { useEffect } from "react";

import styles from "./Badge.module.css";

import { useRef } from "react";
import html2pdf from "html2pdf.js";
import Barcode from "react-barcode";
import { useState } from "react";

const Badge = () => {
  const contentRef = useRef(null);
  const [student, setStudent] = useState({
    name: "Aluno",
    email: "aluno@email.com",
    cpf: "132.2312.2131-12",
    curso: "Curso do aluno",
  });

  useEffect(()=>(
    handleDowload()
  ),[])

  const handleDowload = () => {
    const element = contentRef.current;

    const opt = {
      margin: 10,
      filename: `identificador ${student.name}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className={styles["badge-container"]} ref={contentRef}>
      <div className={styles["badge-info"]} >
        <div className={styles["badge-image"]}>
          <h1>Area para imagem tema</h1>
        </div>
        <div className={styles["badge-data"]}>
          <div>
            <Barcode value={student.cpf} />
          </div>
          <div>
            <span className={styles["field-label"]}>Nome:</span>
            <span className={styles["field-value"]}>{student.name}</span>
          </div>
          <div>
            <span className={styles["field-label"]}>E-mail:</span>
            <span className={styles["field-value"]}>{student.email}</span>
          </div>
          <div>
            <span className={styles["field-label"]}>Curso:</span>
            <span className={styles["field-value"]}>{student.curso}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
