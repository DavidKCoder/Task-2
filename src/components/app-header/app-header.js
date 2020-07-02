import React from "react";

const AppHeader = ({ allPosts, notZero }) => {
  return (
    <div className="app-header d-flex">
      <h1>
        <i className="fa fa-shopping-cart"></i>
      </h1>
      <h1>
        <span className="badge badge-pill badge-info"> {allPosts}</span>
        <span className="badge badge-pill badge-info">{notZero}</span>
      </h1>
      <h1>Items</h1>
    </div>
  );
};

export default AppHeader;
