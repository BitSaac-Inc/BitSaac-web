/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from "react"
import BrandImg from "@/assets/brand.png"

const Brand: React.FC = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col items-center justify-between xl:pl-[80px] px-4 pt-8 xl:gap-0 gap-[48px]">
      <div className="flex flex-col w-full xl:w-[628px]">
        <p>Our Services</p>
        <h1 className="mt-4 mb-6 text-5xl text-[#2A2738]">Our Expertise</h1>
        <p>
          At BitSaac, we offer comprehensive product design and <br />{" "}
          development solutions to bring your ideas to life
        </p>
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col sm:items-start md:items-center gap-[40px] mt-8 justify-evenly ">
          <div className="xl:w-[294px] w-full">
            <p className="font-[600] text-[20px]">Our Agency</p>
            <p className="my-2 w-72">
              {" "}
              Enhance your website's visibility on search engines and attract
              organic traffic with our proven SEO strategies. We optimize your
              site's structure, content, and meta tags to improve rankings and
              drive qualified leads to your business.
            </p>
            <button className="py-3 text-[#4D61F4] text-[18px] font-[500] max-[415px]:hidden">
              Learn More
            </button>
          </div>
          <div className="w-full xl:w-[294px]">
            <p className="font-[600] text-[20px]">New: BitCommerce</p>
            <p className="my-2 w-72 ">
              Unlock the potential of your e-commerce business with BitCommerce.
              Our user-friendly platform empowers SMEs to thrive in the digital
              marketplace with ease and affordability.
            </p>
            <button className="py-3 text-[#4D61F4] text-[18px] font-[500] ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:w-[600px] sm:w-[400px]">
        <Image
          src={BrandImg}
          alt="brand"
          priority
          quality={100}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Brand