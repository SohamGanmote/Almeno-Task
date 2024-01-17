import React, { useState } from "react";
import styles from "./CourseCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import MarkAsDone from "./MarkAsDone";
const CourseCard = ({ course, dashboard, email }) => {
  const redirect = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className={styles.card}>
        <img
          src={course.thumbnail}
          alt={course.name}
          className={styles.thumbnail}
        />
        <div className={styles.content}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          <p>
            <b>Instructor :</b> {course.instructor}
          </p>
          <p className={styles.duration}>{course.duration}</p>
          <div className="flex">
            {dashboard ? (
              <>
                <Button
                  onClick={() => setIsModalVisible(true)}
                  label={"Mark as done"}
                />
                <Link to={`/course/${course.id}`} className="auto">
                  View Details
                </Link>
              </>
            ) : (
              <Button
                onClick={() => redirect(`/course/${course.id}`)}
                label={"View Details"}
              />
            )}
          </div>
        </div>
      </div>
      <Modal
        children={
          <MarkAsDone
            cancel={() => setIsModalVisible(false)}
            id={course.id}
            email={email}
          />
        }
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default CourseCard;
