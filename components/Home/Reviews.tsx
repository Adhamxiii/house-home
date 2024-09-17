import SectionHeading from "../Helper/SectionHeading";
import ReviewSlider from "./ReviewSlider";

const Reviews = () => {
  return <div className="bg-[#fef7f6] pb-16 pt-16">
    <div className="mx-auto w-[80%]">
      <SectionHeading heading="Our Clients Reviews" />
      <div className="mt-14">
        <ReviewSlider />
      </div>
    </div>
  </div>;
};

export default Reviews;
