import React from "react";
import Navbar from "../components/partials/navbar";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaVoicemail } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "../other/Shapes";
import { transition } from "../other/Settings";
import useMeasure from "react-use-measure";

const ContactUs = () => {
    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const resetMousePosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <>
            <div className='bg-site bg-no-repeat bg-cover overflow-hidden h-screen'>
                <Navbar
                    name="Contact"
                />
                <div className="container mx-auto my-4 mb-32 grid gap-8">
                    <div className=" bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow p-20 ">
                        <span className="mb-8"><a className="text-gradient btn-link text-2xl ">MyContact</a></span>
                        <div className="flex gap-12 mt-4">
                            <div className="flex-1 flex-col gap-4">
                                <p className="text-justify text-xl">
                                    If you are interested in working together or providing feedback and suggestions, please feel free to contact me. I am ready to learn and grow with you through amazing web/app design.
                                </p>

                                <MotionConfig transition={transition}>
                                    <motion.button
                                        ref={ref}
                                        initial={false}
                                        animate={isHover ? "hover" : "rest"}
                                        whileTap="press"
                                        variants={{
                                            rest: { scale: 1 },
                                            hover: { scale: 1.5 },
                                            press: { scale: 1.4 }
                                        }}
                                        onHoverStart={() => {
                                            resetMousePosition();
                                            setIsHover(true);
                                        }}
                                        onHoverEnd={() => {
                                            resetMousePosition();
                                            setIsHover(false);
                                        }}
                                        onTapStart={() => setIsPress(true)}
                                        onTap={() => setIsPress(false)}
                                        onTapCancel={() => setIsPress(false)}
                                        onPointerMove={(e) => {
                                            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                                            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                                        }}
                                    >
                                        <motion.div
                                            className="shapes"
                                            variants={{
                                                rest: { opacity: 0 },
                                                hover: { opacity: 1 }
                                            }}
                                        >
                                            <div className="pink blush" />
                                            <div className="blue blush" />
                                            <div className="container">
                                                <Suspense fallback={null}>
                                                    <Shapes
                                                        isHover={isHover}
                                                        isPress={isPress}
                                                        mouseX={mouseX}
                                                        mouseY={mouseY}
                                                    />
                                                </Suspense>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                                            className="label"
                                        >
                                            play
                                        </motion.div>
                                    </motion.button>
                                </MotionConfig>
                                
                            </div>
                            <div className="flex-1 flex flex-col gap-8 ">
                                <div className="flex gap-4">
                                    <FaMailBulk className="w-8 h-8" />

                                    <a className="text-xl" href="mailto:hafidhy288@gmail.com" target="_blank" rel="noopener noreferrer">hafidhy288@gmail.com</a>
                                </div>
                                <div className="flex gap-4">
                                    <FaWhatsapp className="w-8 h-8" />
                                    <a className="text-xl" href="https://wa.me/089527124144" target="_blank" rel="noopener noreferrer">089527124144</a>
                                </div>
                                <div className="flex gap-4">
                                    <FaInstagram className="w-8 h-8" />
                                    <a className="text-xl" href="https://www.instagram.com/apitt_m.y" target="_blank" rel="noopener noreferrer">apitt_m.y</a>
                                </div>
                                <div className="flex gap-4">
                                    <FaLinkedin className="w-8 h-8" />
                                    <a className="text-xl" href="https://www.linkedin.com/in/yusuf212" target="_blank" rel="noopener noreferrer">@yusuf212</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactUs;