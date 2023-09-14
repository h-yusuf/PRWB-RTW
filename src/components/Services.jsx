import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { BiParagraph } from "react-icons/bi";

const services = [
  {
    name: "Ui/UX Design",
    description:
      "Saya adalah seorang Desainer di bidang Desain Antarmuka Pengguna (UI) dan Pengalaman Pengguna (UX) dengan pengalaman yang luas dalam menciptakan pengalaman digital yang menarik dan intuitif. Skill UI/UX saya didukung oleh pengetahuan yang mendalam tentang perilaku pengguna, desain responsif, dan prinsip desain yang solid.",
    link: "Learn more",
  },
  {
    name: "Development Website",
    description:
      "Saya adalah seorang pengembang web dengan pengalaman yang luas dalam menciptakan situs web fungsional dan responsif. Dengan pengetahuan teknis yang mendalam, saya berkomitmen untuk menghasilkan kode berkualitas tinggi dan pengalaman online yang baik bagi pengguna.",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Saya memiliki kemampuan untuk merancang strategi pemasaran digital yang komprehensif, termasuk perencanaan konten, media sosial, iklan online, dan email marketing.",
    link: "Learn more",
  },
  {
    name: "Creator Video",
    description:
      "Saya memiliki kemampuan untuk merancang, mengarahkan, dan mengedit video dengan keahlian yang tinggi. Saya dapat menciptakan konten yang memukau, mulai dari video promosi merek hingga vlog pribadi yang menghibur.",
    link: "Learn more",
  },
];

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
                  <div className="border-b border-white/20 min-h-[170px] flex mb-4" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wide font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight mb-6 font text-justify">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end justify-center py-4">
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
