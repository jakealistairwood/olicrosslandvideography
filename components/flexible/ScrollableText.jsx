import React, { useRef } from "react";
import { useInView, useScroll ,motion, useTransform } from "framer-motion"

const ScrollableText = ({ text, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.25"]
    })

    const textAnimations = {
        initial: {
            opacity: 0.4,
            y: 10,
            filter: "blur(0px)",
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                ease: "easeOut",
                duration: 0.3,
            },
        }
    }

    const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const words = text.split(" ");

    return (
        <motion.h2 ref={ref} style={{ textOpacity }} className="max-w-[740px] lg:max-w-[940px] w-full mx-auto uppercase text-center font-body font-light leading-[150%] tracking-[0.05em] ~text-lg/3xl">
            <span className="sr-only">{text}</span>
            {words?.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)

                return (
                    <Word key={`animated-word-${i}`} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                )
            })}
            {/* <span className="sr-only">{text}</span>
            <motion.span className="block" ref={ref} initial="initial" animate="animate" transition={{ staggerChildren: 0.02 }} aria-hidden>
                {text?.split(' ').map(word => (
                    <>
                        <span className="inline-block">
                            {word.split("").map(char => (
                                <motion.span variants={textAnimations} className="inline-block">{char}</motion.span>
                            ))}
                        </span>
                        <span className="inline-block">&nbsp;</span>
                    </>
                ))}
            </motion.span> */}
        </motion.h2>
    )
}

export default ScrollableText;

const Word = ({children, progress, range}) => {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <>
            <span className="relative inline-block">
                {
                children.split("").map((char, i) => {
                    const start = range[0] + (i * step);
                    const end = range[0] + ((i + 1) * step)
                    return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
                })
                }
            </span>
            <span className="inline-block">&nbsp;</span>
        </>
    )
  }
  
  const Char = ({children, progress, range}) => {
    const opacity = useTransform(progress, range, [0,1])
    return (
      <span>
        <span className="absolute opacity-20">{children}</span>
        <motion.span style={{opacity: opacity}}>{children}</motion.span>
      </span>
    )
  }