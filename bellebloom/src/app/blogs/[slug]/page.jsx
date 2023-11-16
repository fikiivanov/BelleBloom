"use client";
import Blog from "@/app/components/Blog/Blog";
import React, {  } from "react";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
         slug:"face"
        },
        params: {
          slug:"hair"
         },
         params: {
          slug:"body"
         },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  }
}
 
const page = ({params}) => {



  return (
      <Blog name={params.slug}/>

  );
};

export default page;
