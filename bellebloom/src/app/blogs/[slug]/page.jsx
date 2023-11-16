"use client";
import Blog from "@/app/components/Blog/Blog";
import { useParams} from 'next/navigation'
import React from "react";
const page = () => {

  const {slug} = useParams()

  console.log(slug)
  return <Blog name={slug} />;
};

export default page;
