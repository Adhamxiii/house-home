const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl">
        {heading}
      </h1>
      <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default SectionHeading;
