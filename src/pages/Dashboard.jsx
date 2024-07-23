import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import PodcastCard from '../components/PodcastCard';
import PodcastCard1 from '../components/PodcastCard1';
import PodcastCard2 from '../components/PodcastCard2';
import PodcastCard3 from '../components/PodcastCard3';
import PodcastCard4 from '../components/PodcastCard4';
import PodcastCard5 from '../components/PodcastCard5';

const DashboardMain=styled.div`
padding:20px 30px;
padding-bottom:200px;
height:100%;
overflow-y:scroll;
display:flex;
flex-direction:column;
gap:20px;
@media (max-width:768px){
padding: 6px 10px;
}
`;

const FilterContainer=styled.div`
display:flex;
flex-direction:column;
background-color:${({theme})=> theme.bg};
border-radius:10px;
padding:20px 30px;
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

const Span=styled.div`
color:rgb(228,155,15);
font-size: 16px;
font-weight:400;
@media (max-width:768px){
  font-size:14px;
}
`;
const Podcasts=styled.div`
  width:100%;
  display:flex;
  flex-wrap:wrap;
  gap:14px;
  padding: 18px 6px;
  @media (max-width:550px){
    justify-content:center;
  }
`;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link to={`/showpodcasts/mostpopular`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard/>
          <PodcastCard1/>
          <PodcastCard2/>
          <PodcastCard3/>
          <PodcastCard4/>
          <PodcastCard5/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Informative
          <Link to={`/showpodcasts/comedy`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
        <PodcastCard/>
        <PodcastCard1/>
        <PodcastCard2/>
        <PodcastCard3/>
        </Podcasts>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Horror
          <Link to={`/showpodcasts/horror`} style={{textDecoration:"none"}}>
          <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
        <PodcastCard4/>
        <PodcastCard5/>
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard
