import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

const EmailInputModal = () => {
  const [email, setEmail] = useState();
  const redirect = useNavigate();
  return (
    <div className={styles.EmailInput}>
      <input
        placeholder="Enter student email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        label={"Enter"}
        onClick={() => {
          email && redirect("/dahsboard", { state: { email } });
        }}
      />
    </div>
  );
};
export default EmailInputModal;
