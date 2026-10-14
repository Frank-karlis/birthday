"use client"
import { useState } from "react";
import { BsFillCake2Fill } from "react-icons/bs";
import Link from "next/link";
import { ImMenu3 } from "react-icons/im";
import { IoMdClose } from "react-icons/io";


export default function Nav() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center  bg-[#0B1849] py-3 px-3 md:px-12 lg:px-10">
                <div className="flex gap-5">
                         <BsFillCake2Fill className="text-white text-3xl"/>
      </div>
                <div className="text-white lg:flex gap-7 justity-center max-sm:hidden md:hidden">
                    <Link href="/greeting"className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" >Home</Link>
                    <Link href="/messages"className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" >Product</Link>
                    <h1 className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" >Contact us</h1>
                    <h1 className="py-3 text-3xs text-bold font-bold hover:text-white duration-500" >Locate us</h1>
                </div>
                <div className="lg:hidden">
                    {!menu
                        ?
                        <ImMenu3 onClick={() => setMenu(true)} className="text-whire text-4xl" />
                        :
                        <IoMdClose onClick={() => setMenu(false)} className="text-whire text-4xl" />}
                </div>
            </nav>
            {menu
                ?
                <ul className="bg-[#0B1849]  flex flex-col gap-5 p-4 head z-10" style={{ color: "whitesmoke" }}>
                    <li><Link href="/greeting" className="e font-bold text-white hover:text-white duration-500">Home</Link></li>
                    <li><Link href="/messages" className="font-bold text-white hover:text-white duration-500">Product</Link></li>
                    <li><h2  className="font-bold text-white hover:text-white duration-500">Contact us</h2></li>
                    <li><h2  className="font-bold text-white hover:text-white duration-500 ">Locate us</h2></li>
                </ul>
                : null}
        </>
    )
}

          // <BsCake2Fill className="text-[#31304D] text-3xl"/>