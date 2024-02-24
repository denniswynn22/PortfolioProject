import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Home from "./pages/home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/resume',
                element: <Resume />,
            },
            {
                index: true,
                element: <MainContent />
            }


        ]
    },


])

