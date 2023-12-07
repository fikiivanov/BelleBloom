'use client'
import style from "./style.scss"
import React from 'react'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const capitalizeFirstLetter = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
}

const OtherProducts = ({ products }) => {

    return (
        <section className="section-other-products">
            <div className="shell">
                <div className="section__inner">
                    <h3>{`Discover More ${capitalizeFirstLetter(products[0]?.product_type)}: Where Beauty Meets Brilliance!`}</h3>
                    <Swiper
                        breakpoints={{

                            600: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                            1700: {
                                slidesPerView: 7,
                            },
                        }}
                        spaceBetween={70}
                        slidesPerView={1}
                    >
                        {products.map((product) => <SwiperSlide><Card product={product} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OtherProducts