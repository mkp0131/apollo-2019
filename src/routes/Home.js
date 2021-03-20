import React from "react";
import { useQuery, gql } from '@apollo/client';
import styled from "styled-components";
import Movie from '../components/Movie';
import Loading from "../components/Loading";

const MOVIES = gql`
  query getMovies {
    movies(limit: 28) {
      id
      title
      medium_cover_image
    }
  }
`;

const Header = styled.header`
  background: red;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #000;
  color: #fff;
`
const Title = styled.h1`
  font-weight: 900;
  font-size: 32px;
`
const Subtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`
const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  max-width: 768px;
  margin: 0 auto;
  justify-content: center;
  text-align: center;
  margin-top: -10px;
`

const Home = () => {
  const { loading, error, data } = useQuery(MOVIES);
  return (
    <>
      <Header>
        <Title>Apollo 2019</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {
        loading ?
          <Loading /> :
          data && data.movies &&
          (
            <Movies>
              {data.movies.map(movie => <Movie key={movie.id} {...movie} />)}
            </Movies>
          )
      }
    </>
  )


}

export default  Home;