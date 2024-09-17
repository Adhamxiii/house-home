import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

const PropertiesCard = ({
  property,
}: {
  property: {
    id: number;
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
}) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative">
        <Image
          src={property.imageUrl}
          alt={property.propertyName}
          width={300}
          height={300}
          className="w-full object-cover transition-all duration-300 group-hover:scale-110"
        />

        <h1 className="absolute bottom-4 left-4 w-fit rounded-lg bg-black px-6 py-1.5 text-sm text-white">
          <span className="text-base font-bold">${property.price}</span> / mo
        </h1>

        <div className="absolute left-4 top-4 flex w-fit items-center gap-4 space-x-1 rounded-md bg-red-600 px-6 py-2 text-sm font-bold text-white">
          <MdElectricBolt />
          <span className="">Featured</span>
        </div>
      </div>

      <div className="p-5">
        <h1 className="mt-4 text-lg font-bold text-gray-900 group-hover:underline">
          {property.propertyName}
        </h1>
        <p className="mt-3 text-sm text-gray-500">{property.location}</p>
        <div className="mt-6 flex w-full items-center justify-between gap-4 lg:w-[80%]">
          <div className="flex items-center space-x-2">
            <FaBed className="text-rose-500" />
            <p className="text-xs text-gray-600">{property.bedrooms} Beds</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaBath className="text-rose-500" />
            <p className="text-xs text-gray-600">{property.bathrooms} Bath</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaSquare className="text-rose-500" />
            <p className="text-xs text-gray-600">{property.size} sqrt</p>
          </div>
        </div>

        <div className="mb-4 mt-4 h-[1.2px] w-full bg-gray-500 opacity-15" />

        <div className="flex items-center justify-between">
          <h1 className="text-xs text-gray-600">For Rent</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <BiLinkExternal />
            <BsPlusSquare />
            <BsHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
