import React from 'react'
import PodcastCard from '../components/PodcastCard'
import PodcastCard3 from '../components/PodcastCard3';
import PodcastCard5 from '../components/PodcastCard5';
import styled from 'styled-components';

const Container=styled.div`
  padding:20px 30px;
  padding-bottom:200px;
  height:100%;
  overflow-y:scroll;
  display:flex;
  flex-direction:column;
  gap:20px;
`;
const Topic=styled.div`
  color:rgb(244,187,68);
  font-size:24px;
  font-weight:500;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media (max-width:768px){
    font-size:18px;
  }
`;
const FavouriteContainer=styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  padding: 18px 6px;
  @media (max-width:550px){
    justify-content:center;
  }
`;
const Favourites = () => {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouriteContainer>
        <PodcastCard/>
        <PodcastCard3/>
        <PodcastCard5/>
      </FavouriteContainer>
    </Container>
  )
}

export default Favourites
