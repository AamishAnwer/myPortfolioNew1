import React from "react";
import "./work.css";

function Work() {
  return (
    <>
      <div className="work-inside-new">
        <div className="d-flex flex-column mx-2 my-4">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Gyansys Infotech</span>
            <span className="year-passedout">Agust 2021-September 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Associate Consultant</span>
          <span className="description-position">
            <ul>
              <li>Done 3 Certification while I was in the company.</li>
              <li>Created web pages and custom buttons using LWC.</li>
              <li>
                Tested functionality, performed debugging and carried out
                modifications to conduct.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default Work;
