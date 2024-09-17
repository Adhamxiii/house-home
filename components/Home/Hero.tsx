import SearchBox from "../Helper/SearchBox";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0f0715] bg-[url('/images/hero.jpg')] bg-cover bg-center pt-[4vh] md:pt-[12vh]">
      <div className="absolute inset-0 h-full w-full bg-black opacity-70" />
      <div className="container relative z-10 mx-auto flex h-full w-[95%] flex-col items-center justify-center px-4 sm:w-[80%]">
        <h1
          data-aos="fade-left"
          className="text-center text-base font-medium uppercase tracking-tight text-white text-opacity-80 sm:text-lg"
        >
          The best way to
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="mt-4 text-center text-3xl font-semibold text-white sm:text-5xl"
        >
          Find Your Dream Home
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-center text-sm text-gray-200 sm:text-base"
        >
          We&apos;ve more than 745,000 apartments, place & plot.
        </p>

        <div data-aos="zoom-in" data-aos-delay="450" className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
