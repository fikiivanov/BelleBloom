"use client";
import Blog from "@/app/components/Blog/Blog";
import { useParams } from "next/navigation";
import React from "react";
const page = () => {
  const params = useParams();

  return <Blog name={params.slug} />;
};

export default page;
