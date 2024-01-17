const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3080;

let courseArray = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "State and Props",
        content:
          "Understanding React Native state and props, managing component data.",
      },
      {
        week: 4,
        topic: "Navigation in React Native",
        content: "Implementing navigation between screens in React Native.",
      },
      {
        week: 5,
        topic: "API Integration",
        content: "Connecting your React Native app to external APIs.",
      },
    ],
    students: [
      {
        id: 603,
        name: "Ethan Miller",
        email: "ethan@example.com",
      },
      {
        id: 603,
        name: "Ethan Miller",
        email: "ethan@example.com",
      },
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    description:
      "Deepen your understanding of JavaScript with advanced concepts.",
    enrollmentStatus: "In Progress",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scope",
        content: "Understanding closures, lexical scope, and function scope.",
      },
      {
        week: 2,
        topic: "Promises and Async/Await",
        content:
          "Exploring asynchronous JavaScript with promises and async/await.",
      },
      {
        week: 3,
        topic: "ES6 Features",
        content:
          "Exploring ECMAScript 6 (ES6) features and syntax enhancements.",
      },
      {
        week: 4,
        topic: "Design Patterns in JavaScript",
        content: "Understanding common design patterns in JavaScript.",
      },
      {
        week: 5,
        topic: "Web APIs and Fetch",
        content: "Using Web APIs and Fetch for data retrieval in JavaScript.",
      },
    ],
    students: [
      {
        id: 604,
        name: "Olivia Davis",
        email: "olivia@example.com",
      },
      {
        id: 605,
        name: "Mason Wilson",
        email: "mason@example.com",
      },
    ],
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    instructor: "Chris Evans",
    description:
      "A comprehensive bootcamp covering HTML, CSS, and JavaScript for web development.",
    enrollmentStatus: "Closed",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "12 weeks",
    schedule: "Mondays and Thursdays, 5:30 PM - 7:30 PM",
    location: "In-Person",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "HTML Basics",
        content: "Introduction to HTML, creating the structure of web pages.",
      },
      {
        week: 2,
        topic: "CSS Styling",
        content:
          "Styling web pages with CSS, understanding selectors and properties.",
      },
      {
        week: 3,
        topic: "Responsive Web Design",
        content: "Creating responsive web designs with CSS media queries.",
      },
      {
        week: 4,
        topic: "JavaScript Fundamentals",
        content:
          "Fundamental concepts of JavaScript and its role in web development.",
      },
      {
        week: 5,
        topic: "DOM Manipulation",
        content:
          "Manipulating the Document Object Model (DOM) using JavaScript.",
      },
    ],
    students: [
      {
        id: 605,
        name: "Mason Wilson",
        email: "mason@example.com",
      },
      {
        id: 606,
        name: "Ava Anderson",
        email: "ava@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Emma Watson",
    description:
      "Explore the basics of data science with hands-on projects and exercises.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science, key concepts, and applications.",
      },
      {
        week: 2,
        topic: "Python for Data Science",
        content: "Basic data manipulation and analysis using Python.",
      },
      {
        week: 3,
        topic: "Data Visualization",
        content:
          "Creating visualizations with tools like Matplotlib and Seaborn.",
      },
      {
        week: 4,
        topic: "Statistical Analysis",
        content:
          "Performing statistical analysis using Python libraries like NumPy and SciPy.",
      },
      {
        week: 5,
        topic: "Machine Learning Basics",
        content: "Introduction to machine learning concepts and algorithms.",
      },
    ],
    students: [
      {
        id: 606,
        name: "Ava Anderson",
        email: "ava@example.com",
      },
      {
        id: 603,
        name: "Ethan Miller",
        email: "ethan@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Mobile App Design Workshop",
    instructor: "Olivia Brown",
    description:
      "Learn the principles of mobile app design and create your own prototypes.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "In-Person",
    prerequisites: ["Basic design knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile Design",
        content: "Understanding mobile design principles and user experience.",
      },
      {
        week: 2,
        topic: "Prototyping with Figma",
        content: "Creating interactive prototypes using Figma.",
      },
      {
        week: 3,
        topic: "User Interface (UI) Design",
        content:
          "Principles and best practices for creating effective user interfaces.",
      },
      {
        week: 4,
        topic: "User Experience (UX) Design",
        content: "Creating positive user experiences through design decisions.",
      },
      {
        week: 5,
        topic: "Usability Testing",
        content:
          "Conducting usability tests to evaluate the effectiveness of your designs.",
      },
    ],
    students: [
      {
        id: 604,
        name: "Olivia Davis",
        email: "olivia@example.com",
      },
      {
        id: 606,
        name: "Ava Anderson",
        email: "ava@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Frontend Frameworks",
    instructor: "Alex Turner",
    description: "Master frontend frameworks like React, Angular, and Vue.js.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://cdn6.f-cdn.com/contestentries/1162950/18299824/59ef996d1981d_thumb900.jpg",
    duration: "8 weeks",
    schedule: "Wednesdays and Saturdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate JavaScript knowledge",
      "HTML and CSS proficiency",
    ],
    syllabus: [
      {
        week: 1,
        topic: "React Fundamentals",
        content: "Introduction to React, components, and JSX syntax.",
      },
      {
        week: 2,
        topic: "State Management with Redux",
        content: "Managing state in React applications using Redux.",
      },
      {
        week: 3,
        topic: "Angular Basics",
        content: "Exploring the basics of the Angular framework.",
      },
      {
        week: 4,
        topic: "Vue.js Fundamentals",
        content: "Introduction to Vue.js and its reactive data-binding.",
      },
      {
        week: 5,
        topic: "Building a Full-stack App",
        content: "Integration of frontend frameworks with backend APIs.",
      },
    ],
    students: [
      {
        id: 603,
        name: "Ethan Miller",
        email: "ethan@example.com",
      },
      {
        id: 605,
        name: "Mason Wilson",
        email: "mason@example.com",
      },
    ],
  },
];

app.use(bodyParser.json());
app.use(cors());

// Define a route
app.get("/", (req, res) => {
  res.send(courseArray);
});

app.get("/course/:id", (req, res) => {
  const courseId = req.params.id;
  const course = courseArray.find(
    (course) => course.id.toString() === courseId
  );
  res.send(course);
});

app.get("/getStudentsEmail", (req, res) => {
  const allStudentsEmails = courseArray.reduce((emails, course) => {
    course.students.forEach((student) => {
      emails.push(student.email);
    });
    return emails;
  }, []);

  res.send(allStudentsEmails);
});

app.get("/studentCourses/:email", (req, res) => {
  const studentEmail = req.params.email;
  const studentCourses = courseArray.filter((course) =>
    course.students.some((student) => student.email === studentEmail)
  );

  res.send(studentCourses);
});

app.delete("/markasdone", (req, res) => {
  const { id, email } = req.body;
  console.log(id, email);
  const courseToUpdate = courseArray.find((course) => course.id === id);
  if (courseToUpdate) {
    courseToUpdate.students = courseToUpdate.students.filter(
      (student) => student.email === email
    );
  }
  res.send(courseArray);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
