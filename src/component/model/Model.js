import React, { useState, useEffect } from "react";
import "./Model.css";

const Model = ({ data }) => {
  const [swipeModel, setSwipeModel] = useState(false);
  const [summary, setSummary] = useState([]);

  const summaryHandler = (feature) => {
    if (feature) {
      setSummary(feature);
    }
  };
  useEffect(() => {
    summaryHandler();
  }, [summary]);

  return (
    <div className="model">
      <div className="model-container">
        <div className={`swipe ${swipeModel ? "swipe-left" : "swipe-right"}`}>
          {/* FEATURES */}
          <div className="model-features">
            {data.map((item, index) => {
              return <p key={index}>{item.study_name} </p>;
            })}
            <div className="list">
              <ul>
                {data.map((item, index) => {
                  return item.features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <button
                          onClick={() => {
                            setSwipeModel(true);
                            summaryHandler(feature.summary);
                          }}
                        >
                          {feature.name}
                        </button>
                        <span>
                          <button
                            onClick={() => {
                              setSwipeModel(true);
                            }}
                          >
                            &gt;
                          </button>
                        </span>
                      </li>
                    );
                  });
                })}
              </ul>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="model-summary">
            {console.log(summary)}
            <div className="heading">
              <button
                onClick={() => {
                  setSwipeModel(false);
                }}
              >
                &lt;
              </button>
              <p>
                <span> Subject</span> <span>Ages</span>
              </p>
            </div>

            <p id="title">SUMMARY</p>
            <div className="summary">
              <ul>
                {summary.map((result, index) => {
                  return (
                    <li key={index}>
                      <span>{result.type}</span> <span>{result.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
