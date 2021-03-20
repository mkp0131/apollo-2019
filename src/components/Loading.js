import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`


const Loading = () => {
  return (
    <Container>Loading...</Container>
  )
}

export default Loading;