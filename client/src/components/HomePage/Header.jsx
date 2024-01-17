import styles from "./HomePage.module.css";
import Modal from "../UI/Modal/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailInputModal from "./EmailInputModal";
const Header = () => {
  const redirect = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState("");
  return (
    <>
      <div className="flex">
        <h2>Course List</h2>
        <div>
          <button
            className={styles.btn}
            onClick={() => setIsModalVisible(true)}
          >
            Dashboard
          </button>
          <button
            className={styles.btn}
            onClick={() => redirect("/studentsEmails")}
          >
            List of Students (Emails)
          </button>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        children={<EmailInputModal />}
      />
    </>
  );
};
export default Header;
