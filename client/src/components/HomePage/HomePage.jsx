import React, { useEffect, useState } from "react";
import "../../App.css";
import CourseCard from "../CourceCard/CourseCard";
import styles from "./HomePage.module.css";
import Header from "./Header";

function HomePage() {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3080");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search by course or instructor..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredCourses.length === 0 ? (
          <p>No records found.</p>
        ) : (
          <div className="flex">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
