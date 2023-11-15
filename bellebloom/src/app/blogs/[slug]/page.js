"use client";
import Blog from "@/app/components/Blog/Blog";
import React, {  } from "react";
const page = ({params}) => {



  return (
      <Blog name={params.slug}/>

  );
};

export default page;
