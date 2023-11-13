import React from "react";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const page = () => {

    
  return (
    <div>
      <Header caller={"header"} />
      
      <Products categories={["Blush","Bronzer","Eyebrow",]} title={"Face Products"} classname={"product-page"}/>
      <Products categories={["Eyeliner","Foundation","Lip liner"]} title={"Eye and Face Products"} classname={"product-page"}/>
      <Products categories={["Lipstick","Mascara",]} title={"Lip and Nail Products"} classname={"product-page"}/>

      <Footer />
    </div>
  );
};

export default page;
