import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentsList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch("http://localhost:3080/getStudentsEmail");
        const data = await response.json();

        const uniqueEmails = [...new Set(data)];

        setList(uniqueEmails);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchList();
  }, []);

  return (
    <div className="container">
      {list.map((email, index) => (
        <p key={index}>{email}</p>
      ))}
      <Link to={`/`}>Back to home page</Link>
    </div>
  );
};

export default StudentsList;
