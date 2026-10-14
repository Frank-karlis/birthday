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
            <nav className="flex justify-between items-center  bg-[#4D2A00] py-3 px-3 md:px-12 lg:px-10">
                <div className="flex gap-5">
                         <BsFillCake2Fill className="text-[#F2A900] text-3xl"/>
      </div>
                <div className="text-[#F9E6A8] lg:flex gap-7 justity-center max-sm:hidden md:hidden">
                    <Link href="/"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Home</Link>
                    <Link href="/greeting"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Send Wish</Link>
                    <Link href="/messages"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Bithday Wishes</Link>
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
                <ul className="bg-[#4D2A00]  flex flex-col gap-5 p-4 head z-10" style={{ color: "whitesmoke" }}>
                    <li> <Link href="/"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Home</Link></li>
                    <li><Link href="/greeting"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Send Wish</Link></li>
                    <li><Link href="/messages"className="py-3 text-3xs text-bold font-bold hover:text-[#F9E6A8] duration-500" >Bithday Wishes</Link></li>
                </ul>
                : null}
        </>
    )
}

          // <BsCake2Fill className="text-[#31304D] text-3xl"/>