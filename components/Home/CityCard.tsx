import Image from "next/image";

const CityCard = ({
  city,
}: {
  city: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: number;
  };
}) => {
  return (
    <div className="relative m-2 overflow-hidden rounded-lg">
      <Image
        src={city.image}
        alt="image"
        width={700}
        height={700}
        className="h-[450px] w-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute p-4  top-4">
        <h1 className="text-lg font-semibold text-white">{city.cityName}</h1>
        <p className="text-gray-200">
          {city.numberOfProperties} Properties
        </p>
      </div>
    </div>
  );
};

export default CityCard;
