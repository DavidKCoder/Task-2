import React from "react";
import PostListItem from "../post-list-item";
import "./post-list.css";

const PostList = ({ posts, onDelete, increment, decrement}) => {
  const elements = posts.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          posts
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
