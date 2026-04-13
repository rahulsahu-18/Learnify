import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HeroSection from "./pages/students/HeroSection";
import Courses from "./pages/students/Courses";
import Profile from "./pages/students/Profile";
import MyLearning from "./pages/students/Mylearning";

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
        element: (
            <Profile />
        ),
      },
      {
        path: "my-learning",
        element: (
            <MyLearning />
        ),
      }
    ],
  },
]);
export default function App() {
  return <RouterProvider router={appRouter} />;
}
