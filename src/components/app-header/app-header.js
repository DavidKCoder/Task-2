import React from "react";

const AppHeader = ({ allPosts, notZero }) => {
  return (
    <div className="app-header">
      <div className="items">
        <h1>
          <i className="fa fa-shopping-cart"></i>
        </h1>
        <h1>
          <span className="badge badge-pill badge-info"> {allPosts}</span>
        </h1>
        <h1>Items</h1>
      </div>
      <div className="items">
        <h1>
          <i class="fa fa-search"></i>
        </h1>
        <h1>
          <span className="badge badge-pill badge-info">{notZero}</span>
        </h1>
        <h1> &gt; 0</h1>
      </div>
    </div>
  );
};

export default AppHeader;
