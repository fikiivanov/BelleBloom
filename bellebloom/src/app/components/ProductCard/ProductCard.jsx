'use client'
import React, { useEffect, useState } from 'react'
import style from './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import Products from '../Products/Products';
import axios from 'axios';

const ProductCard = ({ productData }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    let fetchInfo = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${productData[1]}&product_type=${productData[2]}`
            );
            setData(
                response.data.find(obj => obj.id == productData[0])
            );

        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <section className="section-product-card">
            <div className="shell">

                {data.id ? (
                    <div className="section__inner">

                        <Image
                            src={data.image_link}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />

                        <div className="section__text">
                            <h2>{data.name}</h2>

                            <hr />

                            <p>Description:</p>

                            <p>{data.description}</p>

                            <p>Brand:{data.brand.toUpperCase()}</p>


                        </div>
                    </div>

                ) : (
                    <div className="loader"></div>
                )
                }

            </div>
        </section>
    )
}

export default ProductCard
