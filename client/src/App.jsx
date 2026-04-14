import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HeroSection from "./pages/students/HeroSection";
import Courses from "./pages/students/Courses";
import Profile from "./pages/students/Profile";
import MyLearning from "./pages/students/Mylearning";
import Dashboard from "./pages/admin/courses/Dashboard";
import Sidebar from "./pages/admin/Sidebar";
import CourseTable from "./pages/admin/courses/CourseTable";
import AddCourse from "./pages/admin/courses/AddCourses";
import EditCourse from "./pages/admin/courses/EditCourse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-learning",
        element: <MyLearning />,
      },
      {
        path: "admin",
        element: <Sidebar />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "course",
            element: <CourseTable />,
          },
          {
            path: "course/create",
            element: <AddCourse />,
          },
          {
            path: "course/:courseId",
            element: <EditCourse />,
          },
        ],
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={appRouter} />;
}
