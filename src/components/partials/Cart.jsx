import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaFigma, FaGlobe } from "react-icons/fa";
import img1 from "../../assets/portfolio-img1.png";


const Cart = (props) => {
    return (
        <>
            <motion.div
                variants={fadeIn("down", props.motion)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                class="max-w-sm bg-gray-800 bg-opacity-25 border border-gray-700 rounded-lg shadow ">
                <a href="#">
                    <div className="group relative overflow-hidden rounded-lg h-[200px] w-[380px] grid items-center bg-black bg-opacity-20">
                        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <img
                            className="group-hover:scale-125 transition-all duration-500 "
                            src={props.img}
                            alt=""
                        />
                        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                            <span className="text-gradient"> {props.title} </span>
                        </div>
                        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                            <span className="text-white"> {props.name} </span>
                        </div>
                    </div>
                </a>
                <div class="p-5">
                    <a className="" href="#">
                        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-200">
                        {props.head} 
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">

                    </p>
                    <div className="w-full flex gap-2">

                        <a
                            href={props.link}
                            class="inline-flex items-center px-3 py-2 text-sm  gap-2 font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            GO SOMEWHERE
                            
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
export default Cart;