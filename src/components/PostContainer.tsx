import React from 'react';
import styled from '@emotion/styled';

const PostWrapper = styled.div`
  p,
  h4 {
    padding: 0.2em 1em;
    text-transform: capitalize;
  }
  div {
    /* background-color: blue; */
    width: 150px;
    height: 100px;
    margin: 10px auto;
  }
  img {
    max-width: 150px;
    max-height: 100px;
    object-fit: cover;
    /* */
    /* border-radius: 10px; */
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
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <h4>{title}</h4>
      <p> {postDate}</p>
      <p> {location}</p>
      <p> {shipping}</p>
    </PostWrapper>
  );
};

export default PostContainer;
