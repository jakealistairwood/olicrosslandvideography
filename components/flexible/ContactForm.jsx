"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "../elements/CustomButton";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion"

const ContactForm = ({ public_key, service_ID, template_id, confirmation_message }) => {
    // const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);

        emailjs
            .sendForm(service_ID, template_id, formRef.current, {
                publicKey: public_key,
            })
            .then((res) => {
                setFormSubmitted(true);
                setLoading(false);
                reset(); 
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    return formSubmitted ? (
        <ConfirmationMessage {...confirmation_message} formSubmitted={formSubmitted} />
    ) : (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-y-8 relative overflow-hidden"
            id="contact-form"
            ref={formRef}
        >
            <div className="flex items-center gap-x-[30px] w-full">
                <div className="form-control form-control--two-col w-full">
                    <label className="text-sm font-body" htmlFor="firstName">
                        First name:
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Joe"
                            {...register("firstName", {
                                required: "First name is required",
                            })}
                            className={`${errors.firstName ? "has-error" : ""}`}
                        />
                        {errors.firstName && (
                            <>
                                <button
                                    type="button"
                                    className="text-red-500 absolute right-0 top-2 w-6 h-6 flex items-center justify-center"
                                >
                                    <ErrorWarningIcon />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="form-control form-control--two-col">
                    <label className="text-sm font-body" htmlFor="lastName">
                        Last name:
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Bloggs"
                            {...register("lastName", { required: false })}
                        />
                    </div>
                </div>
            </div>
            <div className="form-control">
                <label className="text-sm font-body" htmlFor="emailAddress">
                    Email address:
                </label>
                <div className="relative">
                    <input
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="yours@provider.com"
                        {...register("emailAddress", {
                            required: "Email address is required",
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className={`${errors.emailAddress ? "has-error" : ""}`}
                    />
                    {errors.emailAddress && (
                        <>
                            <button
                                type="button"
                                className="text-red-500 absolute right-0 top-2 w-6 h-6 flex items-center justify-center"
                            >
                                <ErrorWarningIcon />
                            </button>
                        </>
                    )}
                </div>
                {/* {errors.emailAddress && (
                    <p className="text-red-500">
                        {errors.emailAddress.message}
                    </p>
                )} */}
            </div>
            <div className="form-control">
                <label className="text-sm font-body" htmlFor="subject">
                    Subject:
                </label>
                <div className="relative">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                        })}
                        className={`${errors.subject ? "has-error" : ""}`}
                    />
                    {errors.subject && (
                        <div className="absolute right-0 top-2">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="text-red-500 w-6 h-6 flex items-center justify-center"
                                >
                                    <ErrorWarningIcon />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {/* {errors.subject && (
                    <p className="text-red-500">{errors.subject.message}</p>
                )} */}
            </div>
            <div className="form-control">
                <label className="text-sm font-body" htmlFor="message">
                    Your message:
                </label>
                <div className="relative">
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Type your message here..."
                        {...register("message", {
                            required: "Message is required",
                        })}
                        className={`${errors.message ? "has-error" : ""}`}
                    />
                    {errors.message && (
                        <div className="absolute right-0 top-2">
                            <div className="relative">
                                <button
                                    type="button"
                                    className="text-red-500 w-6 h-6 flex items-center justify-center"
                                >
                                    <ErrorWarningIcon />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <input type="submit" value="Send" /> */}
            <CustomButton
                type="submit"
                label={loading ? "Sending..." : "Send message"}
                disabled={loading}
            />
        </form>
    );
};

export default ContactForm;

const ErrorWarningIcon = () => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            <g clip-path="url(#clip0_573_1558)">
                <path
                    d="M18 6C15.6266 6 13.3066 6.70379 11.3332 8.02236C9.35977 9.34094 7.8217 11.2151 6.91345 13.4078C6.0052 15.6005 5.76756 18.0133 6.23058 20.3411C6.6936 22.6689 7.83649 24.8071 9.51472 26.4853C11.193 28.1635 13.3312 29.3064 15.6589 29.7694C17.9867 30.2324 20.3995 29.9948 22.5922 29.0866C24.7849 28.1783 26.6591 26.6402 27.9776 24.6668C29.2962 22.6935 30 20.3734 30 18C30 14.8174 28.7357 11.7652 26.4853 9.51472C24.2349 7.26428 21.1826 6 18 6ZM18 28C16.0222 28 14.0888 27.4135 12.4443 26.3147C10.7998 25.2159 9.51809 23.6541 8.76121 21.8268C8.00433 19.9996 7.8063 17.9889 8.19215 16.0491C8.578 14.1093 9.53041 12.3275 10.9289 10.9289C12.3275 9.53041 14.1093 8.578 16.0491 8.19215C17.9889 7.8063 19.9996 8.00433 21.8268 8.7612C23.6541 9.51808 25.2159 10.7998 26.3147 12.4443C27.4135 14.0888 28 16.0222 28 18C28 19.3132 27.7413 20.6136 27.2388 21.8268C26.7363 23.0401 25.9997 24.1425 25.0711 25.0711C24.1425 25.9997 23.0401 26.7362 21.8268 27.2388C20.6136 27.7413 19.3132 28 18 28Z"
                    fill="currentColor"
                />
                <path
                    d="M17.9992 20.07C17.6544 20.07 17.3238 19.933 17.08 19.6892C16.8362 19.4454 16.6992 19.1148 16.6992 18.77V12.77C16.6992 12.4252 16.8362 12.0945 17.08 11.8507C17.3238 11.6069 17.6544 11.47 17.9992 11.47C18.344 11.47 18.6747 11.6069 18.9185 11.8507C19.1623 12.0945 19.2992 12.4252 19.2992 12.77V18.77C19.2992 19.1148 19.1623 19.4454 18.9185 19.6892C18.6747 19.933 18.344 20.07 17.9992 20.07Z"
                    fill="currentColor"
                />
                <path
                    d="M17.9492 24.52C18.7776 24.52 19.4492 23.8484 19.4492 23.02C19.4492 22.1916 18.7776 21.52 17.9492 21.52C17.1208 21.52 16.4492 22.1916 16.4492 23.02C16.4492 23.8484 17.1208 24.52 17.9492 24.52Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_573_1558">
                    <rect width="36" height="36" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};


const ConfirmationMessage = ({ heading, description, formSubmitted }) => {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        amount: 0.2,
        once: true,
    })

    const messageAnimation = {
        initial: {
            opacity: 0,
            y: 50,
        }, 
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
        }
    }

    return (
        <motion.div variants={messageAnimation} initial="initial" animate={formSubmitted && isInView ? "animate" : "initial"} ref={ref} className="bg-white/10 flex flex-col justify-center items-center text-center p-8">
            <h2 className="uppercase font-heading text-3xl tracking-[0.18em]">{heading}</h2>
            <p className="uppercase text-white-80 font-body !text-sm mt-2">{description}</p>
        </motion.div>
    )
}