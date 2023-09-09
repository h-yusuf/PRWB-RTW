import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { BiParagraph } from "react-icons/bi";

const services = [
  {
    name: "Ui/UX Design",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quisquam saepe aut maxime modi voluptatem similique optio necessitatibus provident sed?",
    link: "Learn more",
  },
  {
    name: "Development Website",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quisquam saepe aut maxime modi voluptatem similique optio necessitatibus provident sed?",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quisquam saepe aut maxime modi voluptatem similique optio necessitatibus provident sed?",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero quisquam saepe aut maxime modi voluptatem similique optio necessitatibus provident sed?",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 text-white mb-16 max-w-[455px]">I'm a freelance Frond-end Developer with over 2 years of
              experience.</h3>
              <button className="btn btn-lg">See my work</button>
          </motion.div>

          {/* service list */}

          <motion.div 
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            
            <div className="">
              {services.map((service, index) =>{
                const {name, description,link } = service;
                return (
                  <div className="border-b border-white/20 h-[170px] flex mb-4" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wide font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end py-4">
                      <a className="btn w-8 h-8 mb-[42px] flex justify-center items-center" href="#">
                        <BsArrowUpRight/>
                      </a>
                      <a className="text-gradient text-sm" href="">
                      {link}
                      </a>
                    </div>
                  </div>
                );
              }
              
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
