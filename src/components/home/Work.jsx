import React from "react";
// import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import img1 from "../../assets/portfolio-img1.png";
import img2 from "../../assets/portfolio-img2.png";
import img3 from "../../assets/portfolio-img3.png";
import { useNavigate } from 'react-router-dom'
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../../animation/settings";
import useMeasure from "react-use-measure";
import { fadeIn } from '../../variants'

const Work = () => {
  const resetScroll = () => {
    window.scrollTo(0, 0);
  };

  // Menambahkan event listener saat komponen di-mount
  useEffect(() => {
    const links = document.querySelectorAll('.reset-scroll-link');

    links.forEach(link => {
      link.addEventListener('click', resetScroll);
    });

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', resetScroll);
      });
    };
  }, []);

  const navigate = useNavigate();

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
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1 flex flex-col gap-y-12  mb-10 lg:mb"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent font-semibold">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-12 text-xl">
                My portfolio shows the results of my work and experience while
                studying and participating in several small projects. I am
                confident that the quality of my work will continue to grow and
                satisfy my clients in the future.
              </p>
              {/* <button className="btn btn-sm reset-scroll-link" onClick={() => navigate('/MyProject')}>View all project</button> */}
              <MotionConfig transition={transition}>
                <motion.button
                  ref={ref}
                  initial={false}
                  onClick={() => navigate('/MyProject')}
                  animate={isHover ? "hover" : "rest"}
                  whileTap="press"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.02 },
                    press: { scale: 1 }
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
                    className="shapes "
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                  >
                    <div className="blue blush" />
                    <div className="btn btn-sm blush" />
                    <div className="container">
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{ hover: { scale: 0.98 }, press: { scale: 1 } }}
                    className="label"
                  >
                    View all project
                  </motion.div>
                </motion.button>
              </MotionConfig>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Katalog Allodock app</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1 gap-12 mt-2 flex flex-col">

            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Personal Portfolio</span>
              </div>
            </div>

            {/* image */}

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design and Web</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-white">Moneytrack Katalog</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
