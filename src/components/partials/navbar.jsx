import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "../../animation/settings";
import useMeasure from "react-use-measure";

const Navbar = (props) => {
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
    <>
      <nav className="py-8 z-header relative">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <a
              className="text-gradient h-[70px] flex flex-col justify-center text-[32px]"
              href="#"
            >
              {/* <img className='h-[70px]' src={Logo} alt="" /> */}
              { props.name }
            </a>
            <a href="">
              {/* <button className="btn btn-sm" onClick={() => navigate("/")}>
                Home
              </button> */}
                  <MotionConfig transition={transition}>
                  <motion.button
                    ref={ref}
                    onClick={() => navigate("/")}
                    initial={false}
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
                      Home
                    </motion.div>
                  </motion.button>
                </MotionConfig>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
