import Link from "next/link";

const Footer = ()=>{
    return(
       <footer className="z-50 w-full border-t-2 border-solid  border-[#24E4E3] text-white font-medium text-lg h-fit bg-[#0a5050]">
        <span className="px-12 py-4 absolute">{2024} &copy; All Rights Reserved </span>
        <div className="flex items-center justify-between px-12 py-3">
        <div className="mr-9 flex items-center ml-[520px]">
        Created With <span className="text-pink-600 text-3xl  px-1">
        &#9825;
            </span> By &nbsp;<Link href={`mailto:mazzather@example.com`} target="_blank" className="underline underline-offset-2">Maaz Ather</Link>
        </div>
     <div>
        Quick Links
     </div>
     <div>
        Terms & Conditions
     </div>
     <div>
        Cookie Policy
     </div>
        </div>
       </footer>
    )
}
export default Footer;