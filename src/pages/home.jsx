import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div id="fullHeader">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
