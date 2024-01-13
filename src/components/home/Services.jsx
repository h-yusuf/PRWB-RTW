import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeIn } from "../../variants";
import { BiParagraph } from "react-icons/bi";
import Skills from "../partials/Skills";

const Services = () => {
  return (
    <section className="section mb-8 mt-4" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 text-white mb-16 max-w-[455px]">
              I have experience in UI design and front end developer for more
              than 2 years.
            </h3>
            <a href="https://pf-yusuf.netlify.app/Other">
              <button className="btn btn-lg">My Experience</button>
            </a>
          </motion.div>

          {/* service list */}

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div className="">
              <Skills
                  name= "Ui/UX Design"
                  description=
                    "I am a Designer in the field of User Interface (UI) and User Experience (UX) Design with extensive experience in creating engaging and intuitive digital experiences. My UI/UX skills are backed by a deep knowledge of user behavior, responsive design, and solid design principles."
                  link = "Learn more"
                  url = "/UIUX"
              />
              <Skills
                  name= "Development"
                  description=
                  "I am a web developer with extensive experience in creating functional and responsive websites. With deep technical knowledge, I am committed to producing high-quality code and a good online experience for users."
                  link = "Learn more"
                  url = "/UIUX"
              />
              <Skills
                  name= "Digital Marketing"
                  description=
                    "I have the ability to design comprehensive digital marketing strategies, including content planning, social media, online advertising, and email marketing."
                  link= "Learn more"
                  url = "/UIUX"
              />
              <Skills
                  name= "Creator Video"
                  description=
                  "I have the ability to design, direct, and edit videos with great skill. I can create stunning content, from brand promotional videos to entertaining personal vlogs."
                  link = "Learn more"
                  url = "/UIUX"
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
