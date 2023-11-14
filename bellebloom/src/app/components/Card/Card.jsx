import Image from "next/image";
import React from "react";
import { redirect } from 'next/navigation'

const Card = ({ product}) => {
  return (
    <li key={product.id} props={product} className="card" >
      <Image
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = './images/errorImage.jpg';
        }}
        priority
        width={200}
        height={200}
        loader={() => product.image_link}
        unoptimized={true}
        src={product.image_link}
        alt=""
      />

      <h3>{product.name}</h3>
    </li>
  );
};

export default Card;
