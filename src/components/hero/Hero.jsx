import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import cv from "../../assets/cv ismail-eng.pdf";

const Hero = () => {
  return (
    <div id="home" className={" bg-gradient-to-r from-red-200 to-blue-200 "}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[25px]"
            >
              Hello, I'm Ismail Chari
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full stack Developer",
                2000,
                "I love coding",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-blue-500 text-4xl font-bold sm:text-[25px]"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Welcome to my PortFolio page.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
             <a
                href="https://www.linkedin.com/in/esmail-chari-2b9834259/"
                target="_blank"
                className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-blue-500"
              >
                Hire Me
              </a>
            <a
              href={cv}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/isma230" target="_blank">
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/esmail-chari-2b9834259/"
                  target="_blank"
                >
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/_ismail_otk_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                >
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center  md:items-end sm:items-end">
          <div className="relative h-[70%] w-[70%] w-fit flex left-13 items-center sm:items-end  rounded-full opacity-0.9  overflow-hidden  shadow-2xl  transform transition duration-300 hover:scale-105">
            <img
              data-aos="fade-up"
              className=" h-full  w-full shadow-2xl object-cover md:h-full sm:h-full"
              src="images/mine.jpg"
              alt="mine"
            />
        {/* <div className=" absolute bottom-[-20px]  md:bottom-3 right-[180px] md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
