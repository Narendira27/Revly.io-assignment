import ElementsContainer from "./elementsContainer";

const SummaryContainer = ({ data }) => {
  return (
    <div className="md:px-10 px-5 py-2 my-4 ">
      <div className="border p-3 md:p-5 rounded-md">
        <h1 className="md:text-2xl text-lg mb-4 font-bold text-black md:mb-8">
          Website Performance Summary
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          <ElementsContainer title={"URL"} info={data.url} />
          <ElementsContainer title={"Load Time"} info={data.loadTime} />
          <ElementsContainer
            title={"Request Size"}
            info={data.totalRequestSize}
          />
          <ElementsContainer title={"Request Count"} info={data.requestCount} />
          <ElementsContainer
            title={"Performance Score"}
            info={data.performanceScore + "/100"}
            highlight={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
