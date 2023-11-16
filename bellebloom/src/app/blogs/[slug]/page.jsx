"use client";
import Blog from "@/app/components/Blog/Blog";
import React, {  } from "react";

export function generateStaticParams() {
  return [{ name: '1' }, { name: '2' }, { name: '3' }]
}
 
 
const page = ({params}) => {
const {name}=params


  return (
      <Blog name={name}/>

  );
};

export default page;
