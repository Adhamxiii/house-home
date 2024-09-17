import { appartmentTypeData } from "@/data/data";
import SectionHeading from "../Helper/SectionHeading";
import ApartmentCard from "./ApartmentCard";

const Apartment = () => {
  return (
    <div className="pb-16 pt-16">
      <div className="mx-auto w-[80%]">
        <SectionHeading heading="Apartment Types" />

        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:mt-20 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {appartmentTypeData.map((type, i) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              data-aos-anchor-placement="top-center"
              key={type.id}
            >
              <ApartmentCard type={type} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
