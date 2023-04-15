import React from "react";
import "./education.css";

function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Gurunanak Institute Of Technology, Kolkata
            </span>
            <span className="university-degree">
              Bachelors of Technology in Computer Science
            </span>
          </div>
          <div>
            <span className="year-passedout">2017-2021</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
             St John's Inter College, Ranchi
            </span>
            <span className="university-degree">
              Associate Of Science
            </span>
          </div>
          <div>
            <span className="year-passedout">2015-2017</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              St John's High School, Ranchi
            </span>
            <span className="university-degree">
              High School Diploma
            </span>
          </div>
          <div>
            <span className="year-passedout">2012-2015</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
