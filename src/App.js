import React from "react";
import Model from "./component/model/Model";
import { data } from "./component/data";
import "./App.css";

const App = () => {
  // console.log(data);
  return (
    <div className="container">
      <Model data={data} />
    </div>
  );
};

export default App;
