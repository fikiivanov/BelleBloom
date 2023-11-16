
import Blog from "@/app/components/Blog/Blog";

import React from "react";

export function generateStaticParams() {
  return [{ slug:'body' }, { slug: 'face' },{ slug: '' }, { slug: 'hair' }]
}

const page = ({params}) => {




  return <Blog name={params.slug} />;
};

export default page;
