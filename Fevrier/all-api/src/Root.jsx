import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

const Root = () => {    
    return (
        <>
        <Header />
        <div className="main">
            <Outlet />
        </div>
        </>
    )
}

export default Root;