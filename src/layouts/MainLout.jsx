 import { Outlet } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../components/NavBar"
import { ToastContainer } from "react-toastify";

const MainLout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <ToastContainer/>
    </>
  )
}

export default MainLout