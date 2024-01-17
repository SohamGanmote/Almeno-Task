import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./StudentDashboard.module.css";
import { useEffect, useState } from "react";
import CourseCard from "../CourceCard/CourseCard";
const StudentDashboard = () => {
  const { state } = useLocation();
  const [courses, setCourses] = useState([]);
  const redirect = useNavigate();
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3080/studentCourses/${state.email}`
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="container">
      <div className="flex">
        <h1>{courses.length === 0 ? "Email dosen't exist" : "Your Cources"}</h1>
        <div className="flex gap">
          <Link to={"/"}>Home</Link>
          <Link to={"/studentsEmails"}>List of Students (Emails)</Link>
        </div>
      </div>
      <p>{courses.length === 0 && "please check studen email list"}</p>
      {courses.length === 0 && (
        <button onClick={() => redirect("/studentsEmails")}>
          List of Students (Emails)
        </button>
      )}
      <div className="flexStart">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            dashboard={true}
            email={state.email}
          />
        ))}
      </div>
    </div>
  );
};
export default StudentDashboard;
