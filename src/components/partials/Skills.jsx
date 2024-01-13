import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

const Skills = (props) => {

  return (
    <div>
      <div
        className="border-b border-white/20 min-h-[170px] flex flex-col lg:flex-row mb-4"
        
      >
        <div className="max-w-[476px]">
          <h4 className="text-[20px] tracking-wide font-primary font-semibold mb-6">
            {props.name}
          </h4>
          <p className="font-secondary leading-tight lg:mb-6 font text-justify">
            {props.description}
          </p>
        </div>
        <div className="flex lg:flex-col flex-1 items-center gap-4 flex-row-reverse justify-center py-4 ">
          <a
            className="btn w-8 h-8 hidden lg:flex justify-center items-center"
            href={props.url}
          >
            <BsArrowUpRight className="stroke-1" />
          </a>
          <a className="text-gradient text-sm" href={props.url}>
            {props.link}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Skills;
