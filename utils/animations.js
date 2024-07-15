export const imageMaskAnimation = {
    initial: {
        scaleY: 1,
    },
    animate: {
        scaleY: 0,
        transition: {
            duration: 1.5,
            // ease: [0.86, 0, 0.07, 0.995]
            ease: [0.215, 0.61, 0.355, 1],
        }
    }
}

export const formMaskAnimation = {
    initial: {
        scaleY: 1,
    },
    animate: {
        scaleY: 0,
        transition: {
            duration: 3,
            // ease: [0.86, 0, 0.07, 0.995]
            ease: [0.215, 0.61, 0.355, 1],
        }
    }
}

export const textMaskAnimation = (isInMasthead = false) => ({
    initial: {
        opacity: 0,
        clipPath: "polygon(0% -100%, 100% -100%, 100% 0%, 0% 0%)",
    },
    animate: {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
            delay: isInMasthead ? 0.4 : 0.1,
        }
    }
})

export const topLineAnimation = {
    initial: {
        y: "0%",
    },
    hovered: {
        y: "-100%",
    }
}

export const bottomLineAnimation = {
    initial: {
        y: "100%",
    },
    hovered: {
        y: "0%",
    }
}