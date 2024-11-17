'use client'
import Link from "next/link";
import Image from "next/image";
// import Navbar from "../components/Navbar";
import AnimatedText from "../components/AnimatedText";
import linkdin from "@/public/linkedin.svg";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import gmail from "@/public/gmail.svg";
import {motion} from 'framer-motion'
import github from "@/public/github.jpg"
import discord from '@/public/discord.jpg'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
  
const AnimateLogo = ({ name, x, y }: { name: string; x: string; y: string }) => {
    return(
    <motion.div className="lex items-center justify-center rounded-full font-semibold  text-black text-3xl contrast-200 px-3 
    py-5 shadow-gray-600 absolute"
         whileHover={{scale:1.05}}
         initial = {{x:0 , y:0}}
         animate = {{x:x , y:y}}
         transition={{duration:1}}
         >
              {name}
         </motion.div>
    
)
}


const Boxes = ({
    title,
    link,
    img
  }: {
    title: any;
    link: any;
    img:any
  }) => {
    return (
    <article className="bg-white mb-16  w-[22vw] h-[15vh] flex items-center justify-center rounded-2xl border-l-2 border-r-8 border-t-2 border-b-8  border-[#109494] relative">
       <Link
      href={link}
      target="_blank"
      className="w-2/4 h-full cursor-pointer rounded-2xl"
        
      >
        
      <Image
        src={img}
        alt={title}
        className="w-[130vh] py-3 h-[110%] -mx-28 object-contain brightness-100 absolute"
      />
    </Link>
    
      <div className="flex flex-col items-center justify-between h-full">
        <Link href={link} target="_blank">
          <h2 className="font-bold text-4xl cursor-default text-white">
            {title}
          </h2>
        </Link>
        
      </div>
    </article>
    
    );
  };


const Contact = ()=>{
    return(
        <>
        <Navbar/>
        <AnimatedText text = "Let's Connect Together" className="!text-white  !font-extrabold !text-6xl mt-2 mb-2 "/>
        {/* // small 1 */}
        <div className="grid grid-cols-12 gap-20">
        <div className="col-span-6 -mr-9 mt-9  mx-36 flex items-center justify-between">
       

          <Boxes
            title="Linkdin"
            img={linkdin}
            link=  "https://pk.linkedin.com/in/maaz-ather-a8252b291?trk=people-guest_people_search-card"
            />
        </div>
        {/* small 2 */}
        <div className="col-span-6 mt-8 mx-36">
          <Boxes
            img={gmail}
            title="Gmail"
        link="mailto:mazzather@example.com"
          />
        </div>
      </div>
       {/* // small 3 */}
       <div className="grid grid-cols-12 gap-20">
        <div className="col-span-6 mx-36">
          <Boxes
            img={facebook}
            title="fb"
            link="https://www.facebook.com/maaz_ather_/"
          />
        </div>
        {/* small 4 */}
        <div className="col-span-6 mx-36">
          <Boxes
            title="github"
            img={github}
            link="https://github.com/Mazz-Ather"
          />
        </div>
      </div>
      {/* 5 */}
       <div className="grid grid-cols-12 gap-20">
        <div className="col-span-6 mx-36">
          <Boxes
            title="insta"
            img={instagram}
            link="https://www.instagram.com/maaz_ather_/"
          />
        </div>
        {/* small 6 */}
        <div className="col-span-6 mx-36 ">
          <Boxes
            img={discord}
            title="discord"
            link="https://discord.com/#:~:text=Make%20your%20group%20chats%20more%20fun.%20Use%20custom"
          />
        </div>
      </div>
      {/* <motion.div className="hidden"
          whileHover={{scale:1}}
          >
            Contact Me
            </motion.div> */}
     
          <AnimateLogo name='Linkdin' x='21vw' y='-34.3vw'/>
          <AnimateLogo name='Facebook' x='20vw' y='-22.6vw'/>
          <AnimateLogo name='Instagram' x='20vw' y='-11vw'/>
          <AnimateLogo name='Gmail' x='73vw' y='-34.5vw'/>
          <AnimateLogo name='Github' x='73vw' y='-22.5vw'/>
          <AnimateLogo name='Discord' x='72vw' y='-11vw'/>     
        <Footer/>
        </>
    )
}
export default Contact