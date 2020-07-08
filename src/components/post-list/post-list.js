import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";
import PropTypes from "prop-types"

function PostList({ data, onDelete, increment, decrement }) {
  const elements = data.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          count={itemProps.count}
          //  or {...itemProps}
          onDelete={() => onDelete(id)}
          increment={() => increment(id)}
          decrement={() => decrement(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;

};

PostList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default PostList;
