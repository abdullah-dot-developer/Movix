import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">PAGE NOT FOUND!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
