import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

import "swiper/css";
import "swiper/css/effect-fade";

const TimedTextImageSlider = ({ slider_items = [] }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState();

    const containerRef = useRef(null);

    const isInView = useInView(containerRef, {
        once: false,
        amount: 0.3,
    });

    useEffect(() => {
        if (swiperInstance !== undefined) {
            swiperInstance.slideTo(activeSlide);
        }
    }, [activeSlide, swiperInstance]);

    useEffect(() => {
        const interval = setInterval(() => setActiveSlide((prevSlide) => (prevSlide === slider_items.length -1 ? 0 : prevSlide + 1)), 5000);

        return () => clearInterval(interval);
    }, [slider_items.length, activeSlide, isInView]);

    return (
        <div className="flex gap-x-[100px]" ref={containerRef}>
            <div className="flex-flex-col max-w-[480px] w-full">
                {slider_items?.map((item, i) => (
                    <SliderAccordionItem key={`timed-accordion-item-${item?._key}`} {...item} index={i} />
                ))}
            </div>
            <div className="relative aspect-[580/401] grow overflow-hidden">
                <Swiper 
                    // modules={[EffectFade]}
                    className="w-full h-full"
                    effect="fade"
                    // fadeEffect={{ crossFade: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    {slider_items?.map((item, i) => (
                        <SwiperSlide key={`slider-item-${item?._key}`}>
                            <div className="relative w-full h-full">
                                {item?.image?.asset && <Image src={urlForImage(item?.image?.asset)} fill objectFit="cover" alt="" />}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default TimedTextImageSlider;


const SliderAccordionItem = ({ heading = "", description = "", index }) => {
    return (
        <div className="">
            <button className="py-10">
                <h3 className="font-heading uppercase font-light tracking-[0.24em] text-2xl tracking-[1.26]">{heading}</h3>
            </button>
            <div className="">
                <p>{description}</p>
                <div className="min-h-[40px]" />
            </div>
            <div className="min-h-[1px] w-full bg-accent" />
        </div>
    )
}