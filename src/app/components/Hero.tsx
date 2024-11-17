
import Link from "next/link";
import Image from "next/image";
import bmw from "@/public/bmw-blur.png";
import sidebmw from "@/public/side-img.png";
import bmwText from "@/public/bmw-text.png";
import AnimateText from "@/app/components/AnimatedText";
import i8 from "@/public/I8.png";
import { faPlus , faEye } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Hero = () => {
  return (
    <> 
     <div className="bg-[#0a0a0a]"
    >
    <Navbar />

    </div> 
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="h-screen flex items-center justify-center w-full bg-[#0a0a0a] xl:p-20 lg:p-12 md:p-8 sm:p-2">
        {/* Image */}
        <Image
        src={bmwText}
          className="lg:w-[80%] md:w-[60%] sm:w-[50%] mt-[-370px] mx-20 -mr-16 contrast-200
          "
        //   src={pintrest}
          alt="Pinterest logo"
          width={390}
          height={390}
        />
 {/* Image 2 */}
 
 <Image
        src={bmw}
        className="lg:w-[80%] md:w-[60%] sm:w-[50%] mr-12  mb-[150px] absolute"
        //   src={pintrest}
        alt="bmw"
        width={1050}
        height={1390}
        />
        {/* Image 3 */}
 
 <Image
        src={i8}
        className="lg:w-[80%] md:w-[60%] sm:w-[50%] mx-[10]  mb-[50px] mr-[700px] absolute"
        //   src={pintrest}
        alt="i8"
        width={410}
        height={410}
        />
 {/* Image 4 */}
 
 <Image
        src={sidebmw}
        className="lg:w-[80%] md:w-[60%] sm:w-[50%] mx-[-11%]  mb-[-220px] mr-[700px] absolute"
        //   src={pintrest}
        alt="i8"
        width={500}
        height={500}
        />

        </div> 
        {/* first box */}
        <div className="font-bold p-3 h-auto bg-[#2ad7dd/20%] -mb-5 w-auto border-b-[3px] border-l-[1px] border-r-[3px] border-t-[1px] border-[#24E4E3] rounded-[17%] bottom-36 ml-9 absolute hover:opacity-80">
          <h1 className="text-[#24E4E3] text-center text-[19px] font-bold">  Acceleration</h1>
          <p  className="text-white text-center text-[17px] font-semibold py-1">4.4 s</p>
          <p  className="text-white text-center text-[17px]">From 0-100 km/h</p>
        </div>
 {/* 2nd box */}
 <div className="font-bold h-auto p-3 bg-[#2ad7dd/20%] w-auto -mb-[19px] border-b-[3px] border-l-[1px] border-r-[3px] border-t-[1px] border-[#24E4E3] rounded-[17%] bottom-36 ml-[450px]  absolute hover:opacity-80">
          <h1 className="text-[#24E4E3] text-center text-[19px] font-bold">Range</h1>
          <p  className="text-white text-center text-[17px] font-semibold py-1">23 mi</p>
          <p  className="text-white text-center text-[17px]">Industry Leading</p>
        </div>
         {/* 3rd box */}
         <div className="font-bold p-3 h-auto bg-[#2ad7dd/20%] w-auto border-b-[3px] border-l-[1px] border-r-[3px] border-t-[1px] border-[#24E4E3] rounded-[17%] bottom-6 ml-9 -mb-8 absolute hover:opacity-80">
          <h1 className="text-[#24E4E3] text-center text-[19px] font-bold">Torgue</h1>
          <p  className="text-white text-center text-[17px] font-semibold py-1">520 Nm</p>
          <p  className="text-white text-center text-[15px]">Perfectly Balanced</p>
        </div>
        {/* 4th box */}
 <div className="h-auto font-bold bg-[#2ad7dd/20%] p-3 -mb-9  w-auto border-b-[3px] border-l-[1px] border-r-[3px] border-t-[1px] border-[#24E4E3] rounded-[17%] bottom-6 ml-[450px] absolute hover:opacity-80  ">
          <h1 className="text-[#24E4E3] text-center text-[18px] font-bold">Safety </h1>
          <p  className="text-white text-center text-[17px] font-semibold py-1">5.0 Star</p>
          <p  className="text-white text-center !font-normal text-[18px]">Highest Rating 5</p>
        </div>
        <div  className="absolute bg-[#39f6f6] text-black px-3 py-3 rounded-full lg:hidden ml-[890px] mb-[-250px] border-8 border-[#abfcfc]">
        <FontAwesomeIcon icon={faPlus} 
        className="h-6"
        />
        </div>
        <div className="absolute mb-[-425px] ml-[1108px] text-gray-300 text-[19px] font-bold  lg:hidden">
   Explore Details
        </div>
        <div  className="absolute bg-[#39f6f6] text-black px-3 py-3 rounded-full lg:hidden ml-[890px] mb-[-420px] border-8 border-[#abfcfc]">
        <FontAwesomeIcon icon={faEye} 
        className="h-5"
        />
        </div>
        <div className="absolute mb-[-250px] ml-[1102px] text-gray-300 text-[19px] font-bold  lg:hidden">
   Discover More
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Hero;
