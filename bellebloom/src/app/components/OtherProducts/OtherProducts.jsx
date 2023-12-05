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
                            400: {
                                slidesPerView: 2
                            },

                            600: {
                                slidesPerView: 3
                            },

                            850: {
                                slidesPerView: 4,
                            },

                            1300: {
                                slidesPerView: 5,
                            },

                            1600: {
                                slidesPerView: 6,
                            },
                        }}
                        spaceBetween={50}
                        slidesPerView={2}
                    >
                        {products.map((product) => <SwiperSlide><Card product={product} /></SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default OtherProducts