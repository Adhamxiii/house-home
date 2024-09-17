import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black pb-12 pt-20">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-start gap-12 border-b-[1.5px] border-white border-opacity-20 pb-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center space-x-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-rose-700 text-white md:size-10">
              <FaHouse />
              <FaHome />
            </div>
            <h1 className="text-sm font-bold tracking-tight text-white sm:text-base md:text-xl">
              HouseHome
            </h1>
          </div>
          <p className="mt-6 text-sm text-gray-300">
            HouseHome is an online marketplace where you can buy and sell
            properties. We provide a hassle-free and secure platform to showcase
            your properties and connect with potential buyers and sellers.
          </p>
          <p className="mt-4 font-semibold text-gray-300">adham@gmail.com</p>

          <p className="mt-4 font-semibold text-gray-300">+123 456 789</p>

          <div className="mt-6 flex items-center space-x-4">
            <FaFacebook className="size-6 text-blue-600" />
            <FaTwitter className="size-6 text-sky-500" />
            <FaYoutube className="size-6 text-red-700" />
            <FaInstagram className="size-6 text-pink-600" />
          </div>
        </div>

        <div className="md:mx-auto">
          <h1 className="mb-4 text-sm font-bold tracking-tight text-white sm:text-base md:text-xl">
            Popular Search
          </h1>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Apartment For Rent
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Apartment Low to Hight
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Offices For Buy
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Offices For Rent
          </p>
        </div>

        <div className="md:mx-auto">
          <h1 className="mb-4 text-sm font-bold tracking-tight text-white sm:text-base md:text-xl">
            Quick Link
          </h1>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Terms of use
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Privacy Policy
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Pricing Plans
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Our Services
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Contact Us
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Careers
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            FAQs
          </p>
        </div>

        <div className="lg:mx-auto">
          <h1 className="mb-4 text-sm font-bold tracking-tight text-white sm:text-base md:text-xl">
            Discover
          </h1>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Miami
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Los Angeles
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            Chicago
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            New York
          </p>
          <p className="mb-3 w-fit cursor-pointer text-base text-white text-opacity-60 hover:text-rose-500 hover:underline">
            London
          </p>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-gray-300">
        © 2024 House. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
