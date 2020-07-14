import React from 'react';
import styled from '@emotion/styled';

const PostWrapper = styled.div`
  p,
  h4 {
    padding: 0.2em 1em;
    text-transform: capitalize;
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

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
    <PostWrapper>
      <img src={imageUrl} alt={title} />
      <h4>{title}</h4>
      <p>Posted on: {postDate}</p>
      <p>Location: {location}</p>
      <p>Shipping: {shipping}</p>
    </PostWrapper>
  );
};

export default PostContainer;
