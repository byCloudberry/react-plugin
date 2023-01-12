import React, { useEffect, useState } from "react";
import PieChart from "./PieChart";
import styled from "styled-components";
import axios from "axios";
import { SV_text, EN_text, SV_categories } from "./Info";
import Accordion from "./Accordion";
import TransparencyGraph from "./TransparencyGraph";

/* CSS setting the layout of the App */

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  -webkit-text-size-adjust: none;
  margin-right: 25px;
`;
const TransparencyGraphContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 70px;
`;

/* The URL is used for getting the bag-name and language of the current page. */

const URL = window.location.href;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getStringAfter = (str, after) => str.split(after);
const removeAfterChar = (str) => str.split("-")[0];
const URL_NAME = getStringAfter(URL, "/").pop();
const URL_LANG = URL.split("com/").pop().split("/prod")[0];

/* The App rendering the Charts */

const App = () => {
  /* A state storing the bags */

  const [bags, setBags] = useState();

  /* A state storing a bag */

  const [data, setData] = useState();

  /* A state storing data for the graph "Recycled Leather" */

  const [graphData, setGraphData] = useState();

  /* A state storing the text displayed in the App */

  const [text, setText] = useState();

  /* The useEffect makes an API-call at instantiation. The get-request returns an array of all bags.  */

  useEffect(() => {
    fetchBags().then((res) => setBags(res.data));
  }, []);

  /* The useEffect checks if a bag with URL_NAME is stored in the database. If so, a get-request will be sent 
     for the specific bag.  */

  useEffect(() => {
    if (bags) {
      const bag = bags.find((dp) => dp.name === URL_NAME);
      fetchBag(bag.type).then((res) => setData(res.data));
    }
  }, [bags]);

  /* The useEffect checks the current language of the page, and translates the text depending on the URL_LANG.  */

  useEffect(() => {
    if (data && URL_LANG === "sv") {
      setGraphData(translateCategories(data.graphdata));
      setText(SV_text(removeAfterChar(capitalizeFirstLetter(URL_NAME))));
    } else if (data) {
      setGraphData(data.graphdata);
      setText(EN_text(removeAfterChar(capitalizeFirstLetter(URL_NAME))));
    }
  }, [data]);

  /* A call to our API with the specified parameters.
    The server responds with an array of bags. */

  const fetchBags = () => {
    return axios("https://bycloudberry-server.onrender.com/getbagnames");
  };

  /* A call to our API with the specified parameters.
    The server responds with a specfic bag. */

  const fetchBag = (type) => {
    return axios("https://bycloudberry-server.onrender.com/getbag", {
      params: {
        name: URL_NAME,
        type: type,
      },
    });
  };

  /* The data showed in the graph "Upcycled Leather". */

  const getNewData = () => {
    const newData = data.graphdata.map((dp) => {
      return { ...dp };
    });
    newData[0].amount = data.comparisonData;
    if (URL_LANG === "sv") return translateCategories(newData);
    return newData;
  };

  /* Translates the datapoints in the graph from english to swedish. */

  const translateCategories = (graphdata) => {
    const translatedData = graphdata.map((dp) => {
      return { ...dp };
    });
    let i = 0;
    translatedData.forEach((dp) => {
      dp.type = SV_categories[i++];
    });
    return translatedData;
  };

  /* Here the charts are rendered if the API-calls are successful.
    Else the text Loading will be displayed. */

  return (
    <div>
      {data && graphData ? (
        <div>
          <Accordion title={text.titleFootprint} text={text.description} />
          <StyledDiv>
            <StyledDiv>
              <PieChart
                data={graphData}
                title={`${removeAfterChar(
                  capitalizeFirstLetter(URL_NAME)
                )} -\n ${text.titleRecycled}`}
              />
              <PieChart
                data={getNewData()}
                title={`${removeAfterChar(
                  capitalizeFirstLetter(URL_NAME)
                )} -\n ${text.titleNew}`}
              />
            </StyledDiv>
          </StyledDiv>
          <Accordion
            title={text.titleTransparency}
            text={text.priceTransparency}
          />
          <TransparencyGraphContainer>
            <TransparencyGraph
              data={data.transparency}
              name={removeAfterChar(capitalizeFirstLetter(URL_NAME))}
              lang={URL_LANG}
            />
          </TransparencyGraphContainer>
        </div>
      ) : null}
    </div>
  );
};

export default App;
