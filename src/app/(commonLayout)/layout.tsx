import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default CommonLayout;