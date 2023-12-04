
import React from 'react'
import style from './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import Products from '../Products/Products';


const ProductCard = ({ product }) => {


    return (
        <section className="section-product-card">
            <div className="shell">
                {product ? <div className="section__inner">

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

                        <p>Brand:{product.brand.toUpperCase()}</p>

                    </div>
                </div>:<div className='loader'> </div>}
            </div>
        </section>
    )
}

export default ProductCard
