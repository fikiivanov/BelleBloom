'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Card = ({ product }) => {

    return (
        <li key={product.id} props={product} className="card" >
            <Link href={
                `/products/${product.id}`
            }>
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
            </Link >
        </li>
    );
};

export default Card;
