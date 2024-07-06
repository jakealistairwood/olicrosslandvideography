import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ThreeColGrid = ({ columns = [] }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {columns?.map((col, i) => (
                <GridItem key={`grid-item-${col?._key}`} {...col} index={i} />
            ))}
        </div>
    );
};

export default ThreeColGrid;

const GridItem = ({ heading, description, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.2,
        once: true, // Run the animation only once
    });

    const controls = useAnimation();

    const animateCards = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
            },
        }),
    };

    const childVariants = {
        hidden: { opacity: 0 },
        visible: (i) => ({
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    useEffect(() => {
        if (isInView) {
            controls.start("animate");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            variants={animateCards}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="flex flex-col rounded-lg border border-white/20 py-10 px-8"
            ref={ref}
            custom={index}
            onAnimationComplete={() => controls.start("visible")}
        >
            <motion.div
                initial="hidden"
                animate={controls}
                variants={childVariants}
                custom={0}
                className="mb-2"
            >
                <span className="font-heading font-light ~text-[3rem]/[4rem] tracking-[0.04em]">{`0${index + 1}`}</span>
            </motion.div>
            <motion.h3
                className="uppercase font-heading font-light text-2xl tracking-[0.24em]"
                initial="hidden"
                animate={controls}
                variants={childVariants}
                custom={1}
            >
                {heading}
            </motion.h3>
            <motion.p
                className="mt-[30px] font-body text-white-80 font-light text-base tracking-[0.05em] leading-[1.6]"
                initial="hidden"
                animate={controls}
                variants={childVariants}
                custom={2}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};
