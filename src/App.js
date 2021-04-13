import React, { useState } from "react";
import "./App.css";
import QuotesGenerator from "./quotes.js";
import ClockTime from "./clock.js";
import MoreInfo from "./moreInfo.js";
import Info from "./info.js";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="root">
      <div className="body-container">
        <div className="main-container">
          <div className="content-container">
            {!expanded && <QuotesGenerator />}
            <div className="clock-content slide-up">
              <ClockTime className="slide-up" />
              <MoreInfo setExpanded={setExpanded} />
            </div>
          </div>
        </div>
      </div>
      {expanded && <div className="content-info"><Info /></div>}
    </div>
  );
}

export default App;