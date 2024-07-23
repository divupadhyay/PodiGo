import * as React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import pod1 from '../images/pod1.png';

const SearchedCard = styled(Link)`
width: 500px;
display: flex;
flex-direction: column;
padding: 18px 18px 30px 18px;
border-radius: 6px;
gap: 12px;
background-color: ${({ theme }) => theme.card};
box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
cursor: pointer;
text-decoration: none;
height:min-content;
&:hover{
  cursor: pointer;
  transform: translateY(-8px);
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
  filter: brightness(1.3);
}
@media (max-width: 768px) {
  width: 290px;
}
`
const PodcastImage = styled.img`
object-fit:cover;
  width: 50%;
  border-radius: 6px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.3);
`
const PodcastTitle = styled.div`
color: ${({ theme }) => theme.text_primary};
display: -webkit-box;
  font-size: 24px;
  font-weight: 520;

`
const UploadInfo = styled.div`
display: flex;
width: 80%;
gap: 12px;

`
const Time = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 14px;
@media (max-width: 768px) {
  font-size: 12px;
}
@media (max-width: 560px) {
  font-size: 10px;
}
`
const CreatorName = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 14px;
@media (max-width: 768px) {
  font-size: 12px;
}
@media (max-width: 560px) {
  font-size: 10px;
}
`
const Description = styled.div`
color: ${({ theme }) => theme.text_secondary};
display: -webkit-box;
max-width: 100%;
font-size: 14px;
-webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
const TopResult = ({podcast}) => {
  return (
    <SearchedCard to={`/podcast/ete`}>
      <PodcastImage src={pod1}/>
      <PodcastTitle>Inside The Ambani Wedding</PodcastTitle>
      <UploadInfo>
        <Time>
        • 18k+ Views
        </Time>
        <Time>
        • 7 days ago
        </Time>
        <CreatorName style={{marginLeft: '18px'}}>The Ranveer Show</CreatorName>
      </UploadInfo>
      <Description>
      Today on The Ranveer Show, we welcome Akaash Singh. He is an American comedian and podcaster known for his energetic and candid style. He co-hosts the popular podcast "Flagrant 2" with Andrew Schulz, where he discusses culture, relationships, and personal experiences.

      We recently attended the biggest wedding of all time, The Ambani Wedding, where we saw some crazy stuff and decided to share it with you all. In this episode, we talked about the opulent setting, A-list guests, and cultural significance of the event, showcasing how the wedding elevated India's global image. We also analyze the impact of the wedding on Indian culture, fashion, and business, recognizing the immense influence of the Ambani family.

      Attending an event as big as Anant Ambani - Radhika Merchant's wedding was something out of the ordinary and amazing. This is something that I will never forget.
      </Description>
    </SearchedCard>
   
  );
}

export default TopResult;