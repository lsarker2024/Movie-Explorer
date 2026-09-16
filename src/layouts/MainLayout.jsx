import { Outlet } from "react-router";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const MainLayout = () => {
    return(
        <div>
            <div className="max-w-7xl mx-auto bg-amber-100 p-5">
                <div><HeaderLayout/></div>
                <div><Outlet/></div>
                <div><FooterLayout/></div>
            </div>
        </div>
    );
}

export default MainLayout;