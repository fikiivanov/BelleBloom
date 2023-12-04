'use client'
import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { useParams } from "next/navigation";


const page = () => {
    let params = useParams()
    return (
        <div>
            <Header caller={"header"} />

            <div>{params.id}</div>
            
            <Footer />
        </div>
    );
};
export default page;

