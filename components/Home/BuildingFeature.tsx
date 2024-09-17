import { buildings } from "@/data/data";
import SectionHeading from "../Helper/SectionHeading";
import BuildingFeatureCard from "./BuildingFeatureCard";

const BuildingFeature = () => {
  return (
    <div className="bg-gray-100 pb-16 pt-16">
      <div className="mx-auto w-[80%]">
        <SectionHeading heading="Building Features" />
        <div className="mt-14 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:mt-20 xl:grid-cols-4">
          {buildings.map((building, i) => (
            <div
              key={building.id}
              data-aos="fade-left"
              data-aos-delay={i * 150}
              data-aos-anchor-placement="top-center"
            >
              <BuildingFeatureCard building={building} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildingFeature;
