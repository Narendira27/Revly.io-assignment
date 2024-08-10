import { Oval } from "react-loader-spinner";

const InputContainer = ({ setUrl, url, getWebInfo, loading }) => {
  return (
    <div className="min-w-screen flex items-center justify-center md:px-10 px-5 py-5 md:py-10  ">
      <div className="w-full max-w-md  xl:max-w-xl">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="text-lg xl:text-xl border w-full rounded-md px-2.5 py-1"
          type="link"
          placeholder="Enter URL"
        />
      </div>
      <button
        onClick={() => {
          getWebInfo();
        }}
        className="inline-flex justify-center bg-blue-500 w-full max-w-20 md:max-w-32 xl:max-w-40 text-white px-5 py-1.5 rounded-md ml-5 hover:bg-blue-500/80 hover:transition-colors"
      >
        {loading ? (
          <Oval
            visible={true}
            height="25"
            width="30"
            color="#ffffff"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            className="fit-content"
          />
        ) : (
          "Check"
        )}
      </button>
    </div>
  );
};

export default InputContainer;
