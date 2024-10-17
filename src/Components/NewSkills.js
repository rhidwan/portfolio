import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, summary, info }) => {
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
        {summary}
      </span>
      <div className="my-2 font-medium w-full md:text-sm">{info}</div>
    </motion.div>
    </li>
  );
};

const NewSkills = () => {
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
        Skill
      </h2>

      <div ref={ref1} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* scrolling  */}
        <motion.div
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primary md:w-[2px] md:left-[30px] xs:left-[20px]" 
        />

        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
            <Details
            type="Development"
            summary="Pro"
            info={(<ul>
              <li><strong>Advanced Data scraping</strong>: Requests, Selenium, BeautifulSoup, Puppeteer etc.</li>
              <li><strong>Advanced Web Automation</strong>: Selenium, Undetected Chromedriver, Seleniumwire</li>
              <li><strong>Discord Bot Development</strong>: discord.py, discord.js</li>
              <li><strong>Telegram Bot Development</strong>: telethon, aiogram, pyrogram, python-telethon-bot</li>
              <li><strong>Data Processing</strong>: Pandas, Numpy, Openpyxl, xlrd, gspread</li>
              <li><strong>AI</strong>: Stable Diffusion, OpenAI</li>
            </ul>)}
         />
        
        <Details
            type="Web Technologies"
            summary="Proficient in both python and nodejs"
            info={(<ul>
              <li>Django</li>
              <li>Django Rest Framework</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>GraphQL</li>
              <li>GraphQL Subscription(Real time Communication)</li>
            </ul>)}
            
          />
          

          <Details
            type="Embedded System"
            summary="low level Code for embedded system using C, C++"
            info={(<ul>
                <li>PIC C Studio</li>
                <li>Arduino</li>
                <li>NFC Technologies</li>
                <li>MQTT</li>
                <li>Wireless Technologies</li>
            </ul>)}
            
          />
                  <Details
            type="Database"
            summary="Expert in interacting with database"
            info={(<ul>
                <li>Postgres</li>
                <li>Mongodb</li>
                <li>Supabase</li>
                <li>SQLAlchemy</li>
                <li>TypeORM</li>
                <li>Django ORM</li>
            </ul>)}
            
          />
        </ul>
      </div>
    </div>
  );
};

export default NewSkills;
