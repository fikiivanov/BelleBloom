'use client'
import React from 'react'
import style from './style.scss';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {

    return (
        <section className="section-product-card">
            <div className="shell">
                <div className="section__inner">
                   
                    <Image
                        src={product.image_link}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

                    <div className="section__text">
                        <h2>{product.name}</h2>

                        <hr />

                        <p>Description:</p>

                        <p>{product.description}</p>

                        <p>Brand:  {product?.brand?.toUpperCase()}</p>

                        <Link className='btn btn--reverse' href={product.product_link}>Buy from here</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard