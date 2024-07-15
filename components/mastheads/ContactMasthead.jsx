import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"
import { textMaskAnimation, formMaskAnimation } from "@/utils/animations";
import ContactForm from "../flexible/ContactForm";

const ContactMasthead = ({ subheading = "", heading = "", description = "", contact_form }) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const hasSubheading = subheading && subheading.length > 0;
    const hasDescription = description && description.length > 0;

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const formAnimation = {
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } },
    }

    return (
        <section className="pt-[150px] pb-[120px]" id="contact-masthead">
            <div className="container">
                <header className="uppercase flex flex-col items-center text-center">
                    {hasSubheading && <motion.span variants={textMaskAnimation(true)} initial="initial" animate={domLoaded ? "animate" : "initial"} className="!font-heading text-accent uppercase font-semibold tracking-[0.13em] ~text-[0.8rem]/[1rem] -mt-[0.8em] overflow-hidden">{subheading}</motion.span>}
                    <motion.h1 
                            variants={textMaskAnimation(true)} 
                            initial="initial" 
                            animate={domLoaded ? "animate" : "initial"} 
                            className="font-heading text-center ~text-[5.5rem]/[7.875rem] uppercase tracking-[0.04em] leading-[1] text-ice font-medium text-balance"
                        >
                            {heading}
                    </motion.h1>
                    {hasDescription && <motion.p variants={textMaskAnimation(true)} initial="initial" animate={domLoaded ? "animate" : "initial"} className="text-white-80 font-body text-sm mt-4 max-w-[540px] w-full mx-auto">{description}</motion.p>}
                </header>
                <motion.div variants={formAnimation} initial="initial" animate={domLoaded ? "animate" : "initial"} className="form-wrapper max-w-[540px] w-full mx-auto mt-20 relative overflow-hidden">
                    <ContactForm {...contact_form} />
                </motion.div>
            </div>
        </section>
    )
}

export default ContactMasthead;