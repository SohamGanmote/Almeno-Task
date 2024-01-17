import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import styles from "./CourseCard.module.css";

const MarkAsDone = ({ cancel, email, id }) => {
  const redirect = useNavigate();
  const deleteStudentRecord = async () => {
    try {
      const response = await fetch("http://localhost:3080/markasdone", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id, email }),
      });
      const data = await response.json();
      redirect("/");
    } catch (error) {
      console.log("Error fetching courses:", error);
    }
  };

  return (
    <div className={styles.EmailInput}>
      <h3>
        Are you sure you want to mark as done? The course will be removed from
        your account!
      </h3>
      <button onClick={deleteStudentRecord}>Yes</button>
      <button onClick={cancel}>No</button>
    </div>
  );
};

export default MarkAsDone;
