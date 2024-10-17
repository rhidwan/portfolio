import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
    <LiIcon reference={ref}/>
    <motion.div
     initial={{y:50}}
     whileInView={{y:0}}
     transition={{duration:0.5,type:"spring"}}>

      <h3 className="capitalize font-bold text-3xl sm:text-xl xs:text-lg">{type}</h3>
      <span className="capitalize font-medium text-dark/75 dark:text-primaryDark/75 xs:text-sm">
        {time}| {place}
      </span>
      <div className="font-medium w-full md:text-sm">{info}</div>
    </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  useEffect(() => {
    console.log("scrollYprogress: ", scrollYProgress);
  }, [scrollYProgress]);
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mt-64 mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Work Experience
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="Top Rated Seller"
            time="May 2019 - Present "
            place= "Fiverr Inc."
            info={(<ul>

              <li>Wrote a ton of Data scraping and web automation scripts</li>
              <li>Developed and deployed web applications for different clients</li>
              <li>Built bot for social platforms(telegram, discord ,slacketc.)</li>
              <li>Integrated API from many different platforms.</li>
              <li>Developed scripts that incorporated IOT platforms.</li>
<li>Completed 225+ orders here</li>
            </ul>)}
            
          />
          <Details
            type="Freelance Programmer & Web developer"
            time="June 2022 - Present "
            place= "Upwork Inc."
            info={(<ul>

              <li>Developed Data scraping and web automation programs.</li>
              <li>Built bots for social media platforms(telegram, discord)</li>
              <li>Integrated APIs into programs</li>
            </ul>)}
            
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
