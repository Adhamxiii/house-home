import Image from "next/image";

const ApartmentCard = ({
  type,
}: {
  type: { id: number; icon: string; type: string; number: number };
}) => {
  return (
    <div className="rounded-lg p-6 shadow-lg transition-all duration-300 hover:scale-110">
      <Image src={type.icon} alt={type.type} width={50} height={50} />
      <div className="mt-12">
        <h1 className="text-lg font-bold">{type.type}</h1>
        <p className="mt-2 text-sm text-gray-700">{type.number} properties</p>
      </div>
    </div>
  );
};

export default ApartmentCard;
