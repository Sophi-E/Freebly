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
  return <div className={styles.postContainer}></div>;
};

export default PostContainer;
