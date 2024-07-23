import React from 'react'
import styled from 'styled-components';
import PodcastCard from '../components/PodcastCard';
import PodcastCard2 from '../components/PodcastCard2';
import PodcastCard5 from '../components/PodcastCard5';
import { Avatar } from '@mui/material';

const ProfileMain=styled.div`
padding: 20px 30px;
padding-bottom: 200px;
height: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width:768px){
align-items:center;
}
`;
const UserDetails = styled.div`
display flex;
gap: 120px;
@media (max-width: 768px) {
    width: fit-content;
    flex-direction: column; 
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`
const FilterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
${({ box, theme }) => box && `
background-color: ${theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`}
`;
const Topic = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;
  font-weight: 540;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Podcasts = styled.div`
display: flex;
flex-wrap: wrap;
gap: 14px;
padding: 18px 6px;
@media (max-width: 550px){
  justify-content: center;
}
`;
const ProfileAvatar = styled.div`
  padding-left:3rem;
  @media (max-width: 768px) {
    padding-left:0rem;
    }
`
const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
    align-items: center;
  }
`
const ProfileName = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size:34px;
font-weight:500;
`
const ProfileEmail = styled.div`
color:#2b6fc2;
font-size:14px;
font-weight:400;
`

const Profile = () => {
  return (
    <ProfileMain>
      <UserDetails>
        <ProfileAvatar>
          <Avatar></Avatar>
        </ProfileAvatar>
        <ProfileContainer>
          <ProfileName>Divyansh Upadhyay</ProfileName>
          <ProfileEmail>divyanshupadhyay2001@gmail.com</ProfileEmail>
        </ProfileContainer>
      </UserDetails>
      <FilterContainer>
        <Topic>Your Favourites</Topic>
        <Podcasts>
          <PodcastCard/>
          <PodcastCard2/>
          <PodcastCard5/>
        </Podcasts>
      </FilterContainer>
    </ProfileMain>
  )
}

export default Profile;
