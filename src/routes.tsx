import { RouteObject } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import StudentLifePage from "./pages/StudentLifePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "academics",
        element: <AcademicsPage />,
      },
      {
        path: "admissions",
        element: <AdmissionsPage />,
      },
      {
        path: "student-life",
        element: <StudentLifePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];
