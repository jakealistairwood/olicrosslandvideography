import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

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
                    <SliderAccordionItem key={`timed-accordion-item-${item?._key}`} {...item} index={i} isActiveSlide={activeSlide === i} setActiveSlide={setActiveSlide} />
                ))}
            </div>
            <div className="relative aspect-[580/401] grow overflow-hidden">
                <Swiper 
                    modules={[EffectFade]}
                    className="w-full h-full"
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                    {slider_items?.map((item, i) => (
                        <SwiperSlide key={`slider-item-${item?._key}`}>
                            <div className="relative w-full h-full">
                                {item?.image?.asset && <Image className="w-full h-full" src={urlForImage(item?.image?.asset)} fill objectFit="cover" alt="" />}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default TimedTextImageSlider;


const SliderAccordionItem = ({ heading = "", description = "", index, isActiveSlide, setActiveSlide }) => {
    const accordionAnimation = {
        initial: {
            height: 0,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
        },
        animate: {
            height: "auto",
            opacity: 1,
            pointerEvents: "auto",
            visibility: "visible",
            transition: {
                duration: 0.8,
                ease: [0.04, 0.62, 0.23, 0.98],
                opacity: {
                    duration: 0.3,
                }
                // ease: "easeOut",
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
        }
    }
    return (
        <div className="">
            <button className="py-10" onClick={() => setActiveSlide(index)}>
                <h3 className="font-heading uppercase font-light tracking-[0.24em] text-2xl tracking-[1.26]">{heading}</h3>
            </button>
            <motion.div variants={accordionAnimation} initial="initial" animate={isActiveSlide ? "animate" : "initial"} className="overflow-hidden">
                <p className="text-white-80 font-body text-lg font-light tracking-[0.04em]">{description}</p>
                <div className="min-h-[40px]" />
            </motion.div>
            <div className="relative h-px w-full bg-[#3D3F41]">
                {isActiveSlide && (
                    <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5 }}
                        className={`absolute inset-0 w-full bg-accent`}
                    />
                )}
            </div>
        </div>
    )
}