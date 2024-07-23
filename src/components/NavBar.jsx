import React from 'react';
import styled from "styled-components";
import {Menu, PersonRounded} from "@mui/icons-material";
import { IconButton } from '@mui/material';


const NavBarDiv=styled.div`
    display:flex;
    justify-content:space-between;
    padding:16px 40px;
    align-items:center;
    color: ${({theme})=>theme.text_primary};
    gap:30px;
    background: ${({theme})=>theme.bgLight};
    box-shadow:0 4px 30px rgba(0,0,0,0.1);
    backdrop-filter:blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    @media (max-width:768px){
      padding:16px;
    }
`;
const Welcome=styled.div`
    color:color: ${({theme})=>theme.text_primary};
    font-size:20px;
`;
const ButtonDiv=styled.div`
    font-size:14px;
    cursor:pointer;
    text-decoration:none;
    max-width:70px;
    display:flex;
    align-items:center;
    color:rgb(228,155,15);
    border:1px solid rgb(228,155,15);
    border-radius: 12px;
    padding:8px 10px;
    gap:8px;
`;
const IcoButton=styled(IconButton)`
    color:${({theme})=>theme.text_secondary} !important;
`;

const NavBar = ({setMenuOpen , menuOpen}) => {
  return (
    <NavBarDiv>
      <IcoButton onClick={()=>setMenuOpen(!menuOpen)}>
      <Menu/>
      </IcoButton>
      <Welcome>
      Welcome,to Divyansh's podcast app
      </Welcome>
      <ButtonDiv>
        <PersonRounded/>
        Login
      </ButtonDiv>
    </NavBarDiv>
  )
}

export default NavBar;
