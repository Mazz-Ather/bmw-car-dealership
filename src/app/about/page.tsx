import AnimateText from "../components/AnimatedText";
import Image from "next/image";
import Img from "@/public/car2.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
    <div className="bg-black/10"
    >
    <Navbar />

    </div>
      <div className="relative">
        <div className="bg-black/10 relative z-20 w-[90vw]">
          <AnimateText
            text="Why Choose Our BMW Car Dealership ?"
            className="text-[52px] left-[70px] font-[800] mt-11 !text-[#24E4E3] absolute
            w-[75vw] z-30 -mb-2"
          />
          <main className="flex h-fit items-center justify-center relative z-20">
            <div className="w-1/2 relative z-30 -left-[280px] mt-16 ">
              <div className="font-semibold col-span-3 flex flex-col items-start ">
 
                <p className="capitalize !text-white/60 text-lg ml-6 w-[1290px] mt-7 !bg-white/10  relative p-5 px-28 z-30 border-b-[6px] border-l-[3px] border-r-[2px] border-t-[6px] border-[#0C0C0C]"style={{ clipPath: 'polygon(7% 4%, 97% 0%, 86% 95%, 0% 110%)' }} >
                  <span className="font-extrabold text-lg text-white">Unmatched Expertise:</span> Our dealership is built on a foundation of trust and expertise. We are passionate about the BMW brand, and our team consists of specialists who have in-depth knowledge of every model, from classic BMWs to the latest releases. Whether you need advice on selecting a car, understanding its technology, or maintaining its performance, our experts are here to provide personalized guidance. 
                </p>
                <p className="capitalize !text-white/60 text-lg -ml-3 w-[1290px] mt-7 !bg-white/10  relative p-5 px-28 z-30 border-b-[6px] border-l-[3px] border-r-[2px] border-t-[6px] border-[#0C0C0C]"style={{ clipPath: 'polygon(7% 4%, 97% 0%, 86% 95%, 0% 110%)' }} ><span className="font-extrabold text-lg text-white">Premium Selection of BMW Models:</span> We pride ourselves on offering an extensive range of BMW vehicles, tailored to suit all lifestyles and preferences. From the sporty elegance of the BMW 3 Series to the refined luxury of the BMW X Series SUVs, we have something for every driver. Plus, all our vehicles meet the highest standards of quality, ensuring a premium driving experience.
                </p>
                <p className="capitalize !text-white/60 text-lg -ml-3 w-[1290px] mt-7 !bg-white/10  relative p-5 px-28 z-30 border-b-[6px] border-l-[3px] border-r-[2px] border-t-[6px] border-[#0C0C0C] mb-5"style={{ clipPath: 'polygon(7% 4%, 97% 0%, 86% 95%, 0% 110%)' }} ><span className="font-extrabold text-lg text-white">Tailored Financing Options:</span> We understand that purchasing a BMW is a significant investment, which is why we offer flexible financing options to meet your individual needs. Our financial team works with top lenders to provide you with the best possible rates and terms, whether you're buying or leasing.
                </p>
                
              </div>
            </div>
          </main>
          <div className="absolute inset-0 -m-[40px] mt-[97px] z-10 h-[530px] w-[99vw]" >
            <Image
              src={Img}
              alt="Background image"
              className="absolute object-cover w-[120vw] h-[116vh] -mt-48 mx-9 ml-9 contrast-50 brightness-100"
              style={{ opacity: 0.2 }} // Adjust opacity for visibility
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
