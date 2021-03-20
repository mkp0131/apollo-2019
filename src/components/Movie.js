import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cover = styled.div`
  background-image: url(${props => props.bg});
  background-size: 100%;
  background-position: center;
  padding-bottom: 120%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 3px 1px #dbdbdb;
`;

const Title = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: 700;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: #212121;
`;

const Movie = (movie) => {
  return (
    <>
      <SLink to={`/${movie.id}`}>
        <Cover bg={movie.medium_cover_image}></Cover>
        <Title>{movie.title}</Title>
      </SLink>
    </>
  );
}

export default Movie;