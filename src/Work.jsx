import React from "react";
import "./work.css";

function Work() {
  return (
    <>
      <div className="work-inside-new">
        <div className="d-flex flex-column mx-2 my-4">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Make It Less Portal LLC</span>
            <span className="year-passedout">May 2023-December 2023</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>
                Led the complete development of a cutting-edge ecommerce
                platform, MakeItLess.com, utilizing Next.js and Tailwind CSS,
                enhancing user experience and functionality.
              </li>
              <li>
                Created and optimized seller.makeitless.com and
                admin.makeitless.com using React.js and Tailwind CSS, offering
                streamlined, user-friendly interfaces for enhanced business
                operations.
              </li>
              <li>
                Skillfully integrated numerous APIs for seamless data fetching
                and transmission, further enhancing the site’s functionality and
                user experience.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default Work;
