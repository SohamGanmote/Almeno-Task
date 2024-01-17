import { useNavigate, useParams } from "react-router-dom";
import "../../app.css";
import styles from "./CourseDetails.module.css";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [selectedWeek, setSelectedWeek] = useState(null);

  const redirect = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`http://localhost:3080/course/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleWeekClick = (week) => {
    setSelectedWeek(week === selectedWeek ? null : week);
  };

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.hedder}>
        <img
          src={course?.thumbnail}
          alt="Course Thumbnail"
          className={styles.thumbnail}
        />
        <p className={styles.duration}>{course.duration}</p>
      </div>

      <div className={styles.details}>
        <h1 className={styles.courseName}>{course.name}</h1>
        <p className={styles.instructor}>
          <b>Instructor:</b> {course.instructor}
        </p>
        <p className={styles.description}>{course.description}</p>
        <p className={styles.enrollmentStatus}>
          <b>Enrollment Status:</b> {course.enrollmentStatus}
        </p>
        <p className={styles.schedule}>
          <b>Schedule:</b> {course.schedule}
        </p>
        <p className={styles.location}>
          <b>Location:</b> {course.location}
        </p>

        <div className={styles.prerequisites}>
          <p>Prerequisites:</p>
          <ul>
            {course.prerequisites &&
              course.prerequisites.map((prerequisite, index) => (
                <li key={index}>{prerequisite}</li>
              ))}
          </ul>
        </div>

        <div className={styles.syllabus}>
          <p>Syllabus:</p>
          <ul>
            {course.syllabus &&
              course.syllabus.map((item) => (
                <li key={item.week} className={styles.weekItem}>
                  <div
                    className={`${styles.week} ${
                      selectedWeek === item.week ? styles.selectedWeek : ""
                    }`}
                    onClick={() => handleWeekClick(item.week)}
                  >
                    Week {item.week}
                  </div>
                  {selectedWeek === item.week && (
                    <>
                      <div className={styles.weekDescription}>
                        {"◉ "}
                        {item.content}
                      </div>
                    </>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <Button
          label={"back"}
          onClick={() => redirect(-1)}
          className={styles.backBtn}
        />
      </div>
    </div>
  );
};

export default CourseDetails;
