import React from 'react';
import styles from './PostContainer.module.css';

type PostItemProps = {
  image?: HTMLImageElement;
  title: string;
  postDate: string;
  location: string;
};

const PostContainer: React.FC<PostItemProps> = ({
  image,
  title,
  postDate,
  location
}: PostItemProps) => {
  return (
    <div>
      <div>{image}</div>
      <h4>{title}</h4>
      <p>Posted on: {postDate}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default PostContainer;
