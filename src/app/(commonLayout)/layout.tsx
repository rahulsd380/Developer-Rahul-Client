import Footer from "@/components/Shared/Foooter/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";


const HomeLayout = ({children} : {children:ReactNode}) => {
    return (
        <div className="bg-neutral-35"> 
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default HomeLayout;