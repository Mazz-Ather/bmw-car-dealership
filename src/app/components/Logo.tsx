import Link from "next/link"
// import {motion} from "framer-motion"
// const motionLink = motion(Link)
import Image from "next/image"
import logo from "@/public/logo.png"


const Logo = ()=>{
    return(
        // <div className="flex">
        // {/* Top-left corner logo */}
        <div>
            <Link href="/">
        <Image src={logo} alt="logo" width={65} height={61}
        className="absolute -mx-[350px] -top-3 py-8 right-0 contrast-200 cursor-pointer hover:scale-110 duration-300"
        />
        </Link>
         </div>
        // </div>
    )
}
export default Logo