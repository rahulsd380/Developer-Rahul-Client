"use client";
import { useState } from "react";
import Container from "@/components/Reusable/Container/Container";

const FeaturesTab = () => {
    const [activeTab, setActiveTab] = useState("AI-Powered Search");
    const tabButtons = [
        "AI-Powered Search",
        "Deep Analytics",
        "Campaign Management",
        "Global Database",
        "Competitor Analysis"
    ];

    return (
        <div className="pt-9">
            <Container>
                <div className="border border-neutral-40 bg-neutral-45 rounded-[99px] p-4 flex items-center justify-between gap-3">
                    {
                        tabButtons.map(btn =>
                            <button key={btn} onClick={() => setActiveTab(btn)} className={`cursor-pointer hover:bg-neutral-40 transition duration-500 rounded-[100px] px-[18px] py-3 font-Satoshi font-medium text-xl leading-6 border-2 ${activeTab === btn ? "text-white border-white" : "text-[#90A1B9] border-neutral-45 bg-neutral-45"}`}>{btn}</button>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default FeaturesTab;