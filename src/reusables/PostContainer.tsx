import React from 'react';
import styles from './PostContainer.module.css';

type PostItemProps = {
  imageUrl: string;
  title: string;
  postDate: string;
  location: string;
};

const PostContainer: React.FC<PostItemProps> = ({
  imageUrl,
  title,
  postDate,
  location
}: PostItemProps) => {
  return (
    <div>
      <img src={imageUrl} alt='' />
      <h4>{title}</h4>
      <p>Posted on: {postDate}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default PostContainer;
