import { properties } from "@/data/data";
import SectionHeading from "../Helper/SectionHeading";
import PropertiesCard from "./PropertiesCard";

const Properties = () => {
  return (
    <div className="bg-gray-100 pb-16 pt-16">
      <div className="mx-auto w-[80%]">
        <SectionHeading heading="Discover Our Properties" />
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property, i) => (
            <div
              key={property.id}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              data-aos-anchor-placement="top-center"
            >
              <PropertiesCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
