'use client'

import Image from "next/image";
import bmw1 from "@/public/i8-2.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faGasPump,
  faGear,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import bmw2 from "@/public/car5.jpg";
import bmw3 from "@/public/x-3-limited.jpg";
import bmw4 from '@/public/c1.jpg'
import bmw5 from '@/public/heavy-10.jpg'
import bmw7 from '@/public/heavy-9.jpg'
import bmw9 from '@/public/heavy-7.jpg'
import bmw10 from '@/public/heavy-6.jpg'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeaturedProjects = ({
  type,
  summary,
  img,
}: {
  type: string;
  summary: string;
  img: any;
}) => {
  return (
    <article className="w-[22vw] h-[460px] p-3 -ml-12 rounded-2xl border-l-2 border-r-8 border-t-2 border-b-8  border-gray-800 bg-black/50 text-white/70">
      <Link
        href={"./listings"}
        target="-blank"
        className="cursor-pointer rounded-full"
      >
        <Image
          src={img}
          alt={"title"}
          className="w-[25vw] h-[200px] object-fill contrast-150  "
        />
      </Link>

      <div
        className="flex flex-col items-center justify-between pl-6 w-3/5  
          "
      >
        <span className="text-[#24E4E3] contrast-200 font-bold text-[24px] w-64 mt-4 ml-[80px]">
          {type}
        </span>
        <p className="font-bold text-[17px] ml-[115px] w-[290px]">{summary}</p>
        <div>
          {/* <Link href={github} target="-blank"><GithubIcon/></Link> */}
        </div>
      </div>
    </article>
  );
};

const Listings = () => {
  return (

    <>
    <div className="bg-slate-500 text-black"
    >
    <Navbar />

    </div>
    <div className="flex flex-col items-censter justify-start h-[180vh] bg-slate-500">
      {/* ?first row */}
      <h1 className="ml-[30%] mt-4 mb-2 text-5xl font-bold capitalize text-white">
        The most searched cars
      </h1>
      <div className="gap-24 mt-6">
        <div className="!h-[10px]">
          <div className="!w-[45px] items-center justify-center object-fill p-7 mx-10 -mt-7 ">
            {/* feature 1  */}

            <div className="absolute mt-[311px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
            <FontAwesomeIcon
              icon={faGaugeHigh}
              height={30}
              width={30}
              className="absolute mt-[330px] -ml-4 z-50" />
            <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
              2500 Miles
            </p>
            <FontAwesomeIcon
              icon={faGasPump}
              height={30}
              width={30}
              className="absolute mt-[330px] ml-[90px] z-50" />
            <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
              Petrol
            </p>
            <FontAwesomeIcon
              icon={faGear}
              height={30}
              width={30}
              className="absolute mt-[330px] ml-[180px] z-50" />
            <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
              Manual
            </p>
            <FeaturedProjects
              summary="4.0 D5 Powerplus Momentum...."
              img={bmw1}
              type="BMW i8 - 2014" />
            <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
            {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
            <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
              95000$
            </p>
            <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
              View Details
            </p>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              height={22}
              width={22}
              className="absolute -mt-[37px] ml-[214px] z-50" />
          </div>
        </div>

        {/* feature 2  */}
        <div className="ml-[29.5%] mt-4">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            1209 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Diesel
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Auto
          </p>
          <FeaturedProjects
            summary="0-60 mph in 3.8 seconds...."
            img={bmw2}
            type="BMW i4 - 2020" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            45000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>
        {/* feature 3  */}
        <div className="ml-[54%] -mt-[460px]">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            1209 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Diesel
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Auto
          </p>
          <FeaturedProjects
            summary="The most powerful X car ever..."
            img={bmw3}
            type="BMW X3 - 2023" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            120000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>
        {/* feature 4  */}
        <div className="ml-[78.5%] -mt-[460px]">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            814 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Petrol
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Manual
          </p>
          <FeaturedProjects
            summary="Most luxurious BMW ever..."
            img={bmw4}
            type="BMW C1 - 2024" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            75000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>

      </div>

      {/* ?2nd row */}
      <h1 className="ml-[30%] mt-6 text-5xl font-bold capitalize text-white">
        Modified BMW Heavy Duty
      </h1>
      <div className="gap-24 mt-6">
        <div className="!h-[10px]">
          <div className="!w-[45px] items-center justify-center object-fill p-7 mx-10 -mt-7 ">
            {/* feature 1  */}

            <div className="absolute mt-[311px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
            <FontAwesomeIcon
              icon={faGaugeHigh}
              height={30}
              width={30}
              className="absolute mt-[330px] -ml-4 z-50" />
            <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
              1000 Miles
            </p>
            <FontAwesomeIcon
              icon={faGasPump}
              height={30}
              width={30}
              className="absolute mt-[330px] ml-[90px] z-50" />
            <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
              Petrol
            </p>
            <FontAwesomeIcon
              icon={faGear}
              height={30}
              width={30}
              className="absolute mt-[330px] ml-[180px] z-50" />
            <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
              Auto
            </p>
            <FeaturedProjects
              summary="2025 BMW M3 Competition...."
              img={bmw5}
              type="BMW MB - 2025" />
            <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
            {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
            <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
              120000$
            </p>
            <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
              View Details
            </p>
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              height={22}
              width={22}
              className="absolute -mt-[37px] ml-[214px] z-50" />
          </div>
        </div>

        {/* feature 2  */}
        <div className="ml-[29.5%] mt-4">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            1500 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Petrol
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Auto
          </p>
          <FeaturedProjects
            summary="this heavy duty car is modified..."
            img={bmw7}
            type="Heavy Duty - 2020" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            85000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>
        {/* feature 3  */}
        <div className="ml-[54%] -mt-[460px]">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            1200 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Diesel
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Auto
          </p>
          <FeaturedProjects
            summary="0-60 mph in 3.8 seconds...."
            img={bmw9}
            type="BMW MNI - 2023" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            19000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>
        {/* feature 4  */}
        <div className="ml-[78.5%] -mt-[460px]">

          <div className="absolute mt-[311px] -ml-[27px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            height={30}
            width={30}
            className="absolute mt-[330px] -ml-4 z-50" />
          <p className="absolute mt-[360px] -ml-8 font-semibold z-50">
            8400 Miles
          </p>
          <FontAwesomeIcon
            icon={faGasPump}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[90px] z-50" />
          <p className="absolute mt-[360px] ml-[81px] font-semibold z-50">
            Petrol
          </p>
          <FontAwesomeIcon
            icon={faGear}
            height={30}
            width={30}
            className="absolute mt-[330px] ml-[180px] z-50" />
          <p className="absolute mt-[360px] ml-[170px] font-semibold z-50">
            Manual
          </p>
          <FeaturedProjects
            summary="modified heavy duty car..."
            img={bmw10}
            type="BMW ASR - 2024" />
          <div className="absolute -mt-[66px] -ml-[30px] w-[250px] h-[2px] bg-white opacity-100 z-[60]"></div>
          {/* <hr className="absolute mt-[350px] ml-[170px] w-[200px]"/> */}
          <p className="absolute text-white/80 -mt-[52px] -ml-[30px] font-extrabold text-3xl z-50">
            100000$
          </p>
          <p className="absolute text-white/80 -mt-[43px] ml-[112px] font-extralight text-lg z-50">
            View Details
          </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            height={22}
            width={22}
            className="absolute -mt-[37px] ml-[214px] z-50" />
        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default Listings;
