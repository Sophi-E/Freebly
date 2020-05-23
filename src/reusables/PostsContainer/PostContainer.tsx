import React from 'react';
import styles from './PostContainer.module.css';

type PostItemProps = {
  imageUrl: string;
  title: string;
  postDate?: string;
  location: string;
  shipping?: string;
};

const PostContainer: React.FC<PostItemProps> = ({
  imageUrl,
  title,
  postDate,
  location,
  shipping,
}: PostItemProps) => {
  return (
    <div>
      <img className={styles.postImg} src={imageUrl} alt='' />
      <h4>{title}</h4>
      <p>Posted on: {postDate}</p>
      <p>Location: {location}</p>
      <p>Free Shipping: {shipping}</p>
    </div>
  );
};

export default PostContainer;
