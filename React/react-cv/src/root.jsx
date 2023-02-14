import { Outlet } from "react-router-dom";
import Header from "./header";

const Root = () => {
    return (
        <>
        <Header />
        <main id="app">
            <Outlet />
        </main>
        </>
    )     
}

export default Root;
