"use client";
import Image from "next/image";
import bmw from "@/public/car2.jpg";
import men from "@/public/men.jpg";
import men2 from "@/public/men2.jpg";
import men3 from "@/public/men3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Reviews = () => {
  return (
    <>  
     <div className="bg-slate-700"
    >
    <Navbar />

    </div>
      <div className="flex flex-col items-center justify-start p-4 h-[143vh] bg-slate-700">
      <h1 className="flex flex-col text-5xl font-[780] capitalize text-white">
      what our clients have said about us
      </h1>
      <div className="flex flex-col w-[60%] h-[40vh] border-t-4 border-b-4 border-r-2 border-l-2 border-[#24E4E3] rounded-xl mt-10 -ml-[520px] bg-[#0C0C0C]">
        <div className="flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faCircleUser}
            className=" text-4xl mt-3 absolute  mr-[700px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-3 absolute  ml-[10px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-3 absolute  ml-[110px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-3 absolute  ml-[210px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-3 absolute  ml-[310px]"
          />
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className=" text-3xl mt-3 absolute  ml-[410px]"
          />

          <h2 className="flex text-xl font-bold capitalize text-white mt-10 -mr-[140px] w-full">
            Ralph Wardo . 22 july{" "}
            <span className="text-lg font-bold capitalize mx-[7px] bg-slate-900 text-white border-2 border-white rounded-lg px-2">
              Verified
            </span>
          </h2>
          <br />
          <div className="flex-1  items-center justify-center">
            <p className="flex-1 absolute flex-col text-white/80 text-center justify-center w-[35%] -ml-[370px] text-lg font-medium">
              I buyed a car from this website and it was the best decision i
              made in my life. the car was in perfect condition and the service
              was amazing. i would recommend this website to anyone looking for
              a car.
            </p>
          </div>
        </div>
        <div className="flex items-end justify-end -mr-[18px]">
          <Image
            src={bmw}
            alt="person1"
            width={275}
            height={215}
            className="rounded-md mx-5"
          />
        </div>
      </div>
      {/* 2nd review */}
      <div className="absolute flex flex-col w-[37%] h-[40vh] border-t-4 border-b-4 border-r-2 border-l-2 border-[#24E4E3] rounded-xl mt-40 ml-[810px] bg-[#1e1d1d]">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={men}
            alt="person1"
            width={200}
            height={150}
            className="rounded-md -ml-[296px] -mt-[50px]"
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            className=" text-4xl -mt-[190px] absolute mr-[30px]"
          />
          <h1 className="text-xl font-bold capitalize text-white -mt-[189px] -mr-[192px] absolute">
            John Doe . 15 Dec
          </h1>
          <p className="text-white/80 text-center text-lg font-medium w-[52%] ml-[190px] -mt-[49px] absolute">
            The car was in perfect condition and the service was amazing.
          </p>
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[69px]  absolute  ml-[px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[69px]  absolute  ml-[100px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[69px]  absolute  ml-[200px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[69px]  absolute  ml-[300px]"
          />
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            className=" text-3xl mt-[69px]  absolute  ml-[400px]"
          />
          <p className="text-white/70 text-center text-base font-medium w-[52%] ml-[190px] mt-[149px] absolute">
    4.5 Rating
        </p>
        </div>
    
      </div>
      {/* 3rd review */}
      <div className="absolute flex flex-col w-[57%] h-[40vh] border-t-4 border-b-4 border-r-2 border-l-2 border-[#24E4E3] rounded-xl mt-[450px] -ml-[500px] bg-[#161616]">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={men2}
            alt="person1"
            width={380}
            height={350}
            className="rounded-md ml-[385px]"
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            className=" text-4xl -mt-[190px] absolute mr-[650px]"
          />
          <h1 className="text-xl font-bold capitalize text-white -mt-[189px] mr-[430px] absolute">
            Danial Roy . 9 0ct
          </h1>
          <p className="text-white/80 text-center text-lg font-medium w-[45%] -ml-[360px] -mt-[3px] absolute">
           I bought a car from this website and it is so affordable and great
           service for a car. I highly recommend this website to anyone looking
           for a car.
          </p>
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[162px]  absolute  -ml-[670px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[162px]  absolute  -ml-[570px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[162px]  absolute  -ml-[470px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[162px]  absolute  -ml-[370px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[162px]  absolute  -ml-[270px]"
          />
          <p className="text-white/80 text-end text-base font-medium w-[52%] -ml-[460px] mt-[169px] absolute">
    5.0 Rating
        </p>
        </div>

      </div>
    {/* 4th review */}
    <div className="absolute flex  w-[27%] h-[70vh] border-t-4 border-b-4 border-r-2 border-l-2 border-[#24E4E3] rounded-xl mt-[445px] ml-[810px] bg-[#1e1d1d]">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={men3}
            alt="person1"
            width={360}
            height={296}
            className="rounded-md absolute ml-[360px] -mt-[241px]"
          />
          <FontAwesomeIcon
            icon={faCircleUser}
            className=" text-4xl mt-[26px] absolute -mr-[50px]"
          />
          <h1 className="text-xl font-bold capitalize text-white mt-[27px] -mr-[292px] w-1/2 absolute">
            Mark X . 15 Dec
          </h1>
          <p className="text-white/80 text-center text-lg font-medium w-[82%] ml-[340px] mt-[180px] absolute">
        This Heavy Duty is so good and the service is amazing. i love it. i will buy another one.
          </p>
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[320px]  absolute  ml-[540px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[320px]  absolute  ml-[240px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[320px]  absolute  ml-[340px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[320px]  absolute  ml-[440px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className=" text-3xl mt-[320px]  absolute  ml-[140px]"
          />
          <p className="text-white/70 text-center text-base font-medium w-[52%] ml-[340px] mt-[400px] absolute">
    5.0 Rating
        </p>
        </div>
    
      </div>
  
    </div>
    <Footer/>
    </>
  );
};
export default Reviews;
