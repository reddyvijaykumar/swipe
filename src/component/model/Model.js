import React, { useState, useEffect } from "react";
import "./Model.css";
import Modal from "react-modal";

const Model = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [swipeModel, setSwipeModel] = useState(false);
  const [height, setHeight] = useState(false);
  const [summary, setSummary] = useState([]);

  const summaryHandler = (feature) => {
    if (feature) {
      setSummary(feature);
    }
  };
  useEffect(() => {
    summaryHandler();
  });

  return (
    <div>
      <button
        style={{ position: "absolute", top: "40%", left: "20%" }}
        onClick={() => setModalIsOpen(true)}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            border: "none",
          },
        }}
      >
        <div
          className={`model ${height ? "model-height" : "model-height-normal"}`}
        >
          {/* <div className="model"> */}
          <div className="model-container">
            <div
              className={`swipe ${swipeModel ? "swipe-left" : "swipe-right"}`}
            >
              {/* FEATURES */}
              <div className="model-features">
                {" "}
                <button onClick={() => setModalIsOpen(false)}>X</button>
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
                                // heightHandler(true);
                                setHeight(true);
                              }}
                            >
                              {feature.name}
                            </button>
                            <span>
                              <button
                                onClick={() => {
                                  setSwipeModel(true);
                                  // heightHandler(false);
                                  setHeight(true);
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
                <button onClick={() => setModalIsOpen(false)}>X</button>
                <div className="heading">
                  <button
                    onClick={() => {
                      setSwipeModel(false);
                      setHeight(false);
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
                <div className="cut-off">
                  <p>SET CUTOFF</p>
                  <p>
                    Minimum value <span>19</span>
                  </p>
                  <p>
                    Maximum value <span>55</span>
                  </p>
                  <p></p>

                  <div className="range">
                    <div>MIN</div>
                    <div> 19 - 55</div>
                    <div>MAX</div>
                  </div>
                </div>

                <div className="action">
                  <button>Apply</button>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
