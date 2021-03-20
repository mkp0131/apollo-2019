import React from "react";
import { useQuery, gql } from '@apollo/client';
import styled from "styled-components";
import { useParams } from "react-router";
import Loading from "../components/Loading";

const MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_full
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Movie = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
`
const Left = styled.div`
  // background: red;
  color: #fff;
`

const Right = styled.div`
  // background: black;
`
const Title = styled.div`
  font-weight: 900;
  font-size: 52px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 16px;
`
const Cover = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 120%;
  background-size: 100%;
  border: 4px solid #fff;
  box-sizing: border-box;
`

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(MOVIE, {
    variables: {id: id}
  });
  console.log(data)
  return (
    <>
      <Container>
        {
          loading ?
          <Loading /> :
          <Movie>
            <Left>
              <Title>{data.movie.title}</Title>
              <Description>
                {data.movie.description_full.slice(0, 300)}...
              </Description>
            </Left>
            <Right>
              <Cover bg={data.movie.medium_cover_image}></Cover>
            </Right>
          </Movie>
        }
      </Container>
    </>
  );
}

export default Detail;
