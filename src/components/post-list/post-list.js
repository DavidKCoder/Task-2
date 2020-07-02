import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ data, onDelete, increment, decrement}) => {
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

export default PostList;
