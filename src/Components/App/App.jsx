import React, { useEffect } from "react";
import CardForm from "../CardForm/CardForm";
import getHtml from "../../api/index.js";
const analyzer = (url) => {
  
  getHtml(url);
};
function App() {
  return (
    <div className="App text-center my-3">
      <h1>It is our microdata validator</h1>
      <CardForm analyzer={analyzer} />
    </div>
  );
}

export default App;
