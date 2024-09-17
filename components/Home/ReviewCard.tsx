import Image from "next/image";
import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const ReviewCard = ({
  review,
}: {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
}) => {
  return (
    <div className="relative m-3 rounded-lg bg-white p-6">
      <FaQuoteRight className="absolute right-4 top-4 size-8 text-red-600 opacity-20" />
      <div className="mt-6 flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="size-4 text-yellow-600" />
        ))}
      </div>
      <p className="mt-6 text-base font-medium text-gray-600">
        {review.review}
      </p>
      <div className="mb-6 mt-6 h-[1.2px] w-full bg-gray-600 opacity-10" />

      <div className="flex items-center space-x-4">
        <Image
          src={review.userImage}
          alt={review.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h1 className="font-bold text-gray-800">{review.name}</h1>
          <p className="text-sm text-gray-500">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
