'use client'

import Image from "next/image";
import Tilt from "react-parallax-tilt";

const BuildingFeatureCard = ({
  building,
}: {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
}) => {
  return (
    <Tilt className="rounded-lg bg-white p-4 shadow-md">
      <div className="ml-auto flex size-16 flex-col items-center justify-center rounded-full bg-gray-100">
        <Image src={building.image} alt="icon" width={40} height={40} />
      </div>
      <div className="p-2">
        <p className="mt-6 text-xl font-bold text-red-600">0{building.id}</p>
        <p className="my-2 text-lg font-bold text-gray-700">{building.title}</p>
        <p className="text-sm text-gray-700 opacity-70">
          {building.description}
        </p>
      </div>
    </Tilt>
  );
};

export default BuildingFeatureCard;
