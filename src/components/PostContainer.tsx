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
    height: auto;
    object-fit: cover;
  }
`;

type PostItemProps = {
  imageUrl: string;
  title: string;
  postDate?: string;
  location?: string;
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
      <p> {postDate}</p>
      <p> {location}</p>
      <p> {shipping}</p>
    </PostWrapper>
  );
};

export default PostContainer;
