import React from 'react';
import styled from '@emotion/styled';

const PostWrapper = styled.div`
  /* p,
  h4 { */
  padding: 0 1em;
  text-transform: capitalize;
  /* } */
  p {
    line-height: 1;
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
  /* p {
    padding: 0;
  } */
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
      <p>Posted on: {postDate}</p>
      <p>Location: {location}</p>
      <p>Shipping available? {shipping}</p>
    </PostWrapper>
  );
};

export default PostContainer;
