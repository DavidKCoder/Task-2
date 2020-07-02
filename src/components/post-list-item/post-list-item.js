import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component {
  render() {
    const {
      // label,
      onDelete,
      increment,
      decrement,
      count
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between";
    return (
      <div className={classNames}>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary btn-sm" type="button">
            {count}
          </button>
          <button className="btn btn-secondary btn-sm" type="button" onClick={increment}>
            <i className="fa fa-plus-circle"></i>
          </button>
          <button className="btn btn-info btn-sm" type="button" onClick={decrement}>
            <i className="fa fa-minus-circle"></i>
          </button>
          <button className="btn btn-danger btn-sm" type="button" onClick={onDelete}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    );
  }
}
