import { Outlet } from "react-router";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const MainLayout = () => {
    return(
        <div>
            <div className="min-h-screen bg-[#080b12] font-sans text-white">
                <div><HeaderLayout/></div>
                <div><Outlet/></div>
                <div><FooterLayout/></div>
            </div>
        </div>
    );
}

export default MainLayout;