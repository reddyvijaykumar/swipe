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
    <div style={{ position: "relative" }}>
      <button
        style={{ position: "absolute", top: "40vh", left: "20wh" }}
        onClick={() => setModalIsOpen(true)}
      >
        Open modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            backgroundColor: "rgba(255,255,255,0.3)",
          },
          content: {
            border: "none",
            // position: "absolute",
            // top: "0px",
            // right: "0px",
            // bottom: "0px",
            // left: "0px",
            backgroundColor: "rgba(255,255,255,0.3)",
            // borderRadius: "4px",
            // outline: "none",
            // padding: "20px 20px 20px 20px",
          },
        }}
      >
        <div
          className={`model ${height ? "model-height" : "model-height-normal"}`}
        >
          {/* <div className="model"> */}
          <div className="model-container">
            <button className="close" onClick={() => setModalIsOpen(false)}>
              X
            </button>
            <div
              className={`swipe ${swipeModel ? "swipe-left" : "swipe-right"}`}
            >
              {/* FEATURES */}
              <div className="model-features">
                {data.map((item, index) => {
                  return (
                    <p className="feature-title" key={index}>
                      {item.study_name}
                    </p>
                  );
                })}
                {/* <button
                  className="feature-close"
                  onClick={() => setModalIsOpen(false)}
                >
                  X
                </button> */}
                {/* <div className="feature-title-close"></div> */}
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
