 import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const MainLout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default MainLout