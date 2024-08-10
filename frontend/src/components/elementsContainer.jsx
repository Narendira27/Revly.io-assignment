const ElementsContainer = ({ title, info, highlight }) => {
  return (
    <div className=" col-span-1">
      <div className="flex flex-col justify-start ">
        <h1 className="text-lg md:text-xl text-gray-500/80 font-bold mb-2">
          {title}
        </h1>
        <p
          className={` text-md md:text-lg text-black font-semibold ${
            highlight ? "text-blue-500" : null
          } `}
        >
          {info}
        </p>
      </div>
    </div>
  );
};

export default ElementsContainer;
