import { useEffect, useState } from "react";
import {
  DetailedMetrics,
  InputContainer,
  Navbar,
  SummaryContainer,
} from "../components";
import link from "../url";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [url, setUrl] = useState("");

  const getWebInfo = () => {
    let userInput = url;
    if (userInput.length > 0) {
      if (!url.startsWith("http") && !url.startsWith("https")) {
        userInput = "https://" + userInput;
      }
      setLoading(true);
      axios
        .post(link + "/check-performance", { url: userInput })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Navbar />
      {/* <div className="flex flex-col flex-grow justify-center">
        
      </div> */}
      <InputContainer
        loading={loading}
        getWebInfo={getWebInfo}
        url={url}
        setUrl={setUrl}
      />
      {data ? (
        <>
          <SummaryContainer data={data} />
          <DetailedMetrics data={data} />
        </>
      ) : null}
    </div>
  );
};

export default Home;
