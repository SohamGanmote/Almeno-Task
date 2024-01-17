import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import NotFound from "./components/NotFound";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import RootLayout from "./Layout/RootLayout";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/course/:id",
          element: <CourseDetails />,
        },
        {
          path: "/dahsboard",
          element: <StudentDashboard />,
        },
        {
          path: "/studentsEmails",
          element: <StudentsList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
