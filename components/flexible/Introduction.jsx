import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion"

const Introduction = ({ subheading = "", word_switcher= {} }) => {
    const { words_to_animate } = word_switcher;
    console.log(words_to_animate);

    return (
        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-[120px]">
            <span className="font-heading text-carbon uppercase font-medium tracking-[0.24em] text-sm">{subheading}</span>
            <WordSwitcher words_group={words_to_animate} />
        </div>
    )
}

export default Introduction;

const WordSwitcher = ({ words_group }) => {
    return (
        <h2 className="font-body text-white-80 text-[2.5rem] font-light max-w-[820px] w-full">
            {words_group?.map((group, i) => (
                group?.animate_group ? (
                    <React.Fragment key={`word-group-${i}`}>
                        <SwitchWords words_to_switch={group?.animated_text} />
                        <br />
                    </React.Fragment>
                ) : (
                    <span key={`word-group-${i}`} className="inline">{group?.text}</span>
                )
            ))}
        </h2>
    )
}

const SwitchWords = ({ words_to_switch }) => {
    const duration = 1500;
    const [activeWord, setActiveWord] = useState(words_to_switch[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const animateWord = useCallback(() => {
        const word = words_to_switch[words_to_switch.indexOf(activeWord) + 1] || words_to_switch[0];
        setActiveWord(word);
        setIsAnimating(true);
    }, [activeWord, words_to_switch]);

    useEffect(() => {
        if (!isAnimating)
          setTimeout(() => {
            animateWord();
          }, duration);
      }, [isAnimating, duration, animateWord]);

    return (
        <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className=
          "z-10 inline-block relative text-left px-2"
        key={activeWord}
      >
        {activeWord.split("").map((letter, index) => (
          <motion.span
            key={activeWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
    )
}