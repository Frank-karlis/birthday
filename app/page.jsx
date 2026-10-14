import Link from "next/link";
import { FaWineGlassAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-3 min-h-screen md:px-12 lg:px-16 py-12 bg-[#F9E6A8] min-h-screen">
      <section className="min-h-screen  flex flex-col justify-between gap-16 md:gap-0">
      
        <div>
         <FaWineGlassAlt className="-skew-x-30 inline-block Fixed text-6xl px-4 pl-6 text-[#F2A900]"/>
          <h1 className="text-[#4D2A00] text-5xl md:text-6xl text-center font-bold">
            HAPPY BIRTHDAY MRS CHARITY 
          </h1>
          <h2 className="p-4 text-[#4D2A00]">
As you celebrate another year of life, I want you to know how deeply loved you are and how much I appreciate all your efforts. May God continue to bless 
you with good health of mind and body, favour, prosperity, and abundance. Thank you for being a wonderful mother and a woman of great virtue. Happy birthday, Mum!
            </h2>

            <blockquote className=" grid grid-cols-2 gap-3 m-6 lg:grid-cols-4 lg:gap-5">
              <Image
                width={200}
                height={200}
                src={"/Pic 5.jpeg"}
                alt="car image"
                className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
              <Image
                width={200}
                height={200}
                src={"/Pic 15.jpeg"}
                alt="car image"
                className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={300}
              height={350}
              src={"/Pic 2.jpg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={300}
              height={300}
              src={"/Pic 1.jpg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 16.jpg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 3.jpg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 4.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 6.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 7.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 8.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 9.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 10.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 11.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 12.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 13.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
            <Image
              width={200}
              height={200}
              src={"/Pic 14.jpeg"}
              alt="car image"
              className="h-[200px] w-[200px] rounded-lg object-cover transition-transform duration-300 hover:scale-105" />
          </blockquote>
        </div>
      </section>
    </main>
  );
} 

