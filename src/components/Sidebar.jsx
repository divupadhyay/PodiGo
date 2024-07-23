import React from 'react'
import styled from "styled-components";
import {HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, UploadRounded, LightModeRounded, LogoutRounded, DarkModeRounded, CloudUploadRounded} from "@mui/icons-material";
import LogoImage from "../images/logos.png"
import {Link} from "react-router-dom";

const MenuContainer= styled.div`
    flex:0.5;
    flex-direction:column;
    height:100vh;
    display:flex;
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.text_primary};
    @media (max-width:1100px){
     position:fixed;
     z-index:1000;
     width:100%;
     max-width:250px;
     left: ${({menuOpen})=>(menuOpen ? "0" :"-100%")};
     transition: 0.3s ease-in-out;
    }
    
`;
const Flex = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding:0px 12px;
`;
const Logo = styled.div`
    color:rgb(228,155,15);
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 6px;
    font-weight:bold;
    font-size:40px;
    margin: 16px 0px;
    
    `;
const Image = styled.img`
    height:90px;
`;
const Close= styled.div`
    display:none;
    @media (max-width: 1100px){
    display:block;
    }
`;
const Elements= styled.div`
    padding: 4px 16px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    gap:12px;
    cursor:pointer;
    color: grey;
    text-decoration: none !important;
    &:hover{
    background-color: rgba(250,249,246,0.2);
    }
`;
const NavText= styled.div`
    padding: 12px 0px;
    text-decoration:none !important;
`;
const HR=styled.div`
    width:100%;
    height:1px;
    background-color:grey;
    margin: 10px 0px;
`;


const Sidebar = ({menuOpen, setMenuOpen, setDarkMode, darkMode}) => {
  const menuItems=[
    {
      link:"/",
      name:"Dashboard",
      icon: <HomeRounded/>,
    },
    {
      link:"/search",
      name:"Search",
      icon: <SearchRounded/>,
    },
    {
      link:"/favourites",
      name:"Favourites",
      icon: <FavoriteRounded/>,
    },
    
  ];
  
  const button=[
    {
      fun:()=>console.log("Upload"),
      name:"Upload",
      icon: <CloudUploadRounded/>,
    },
    {
      fun:()=>setDarkMode(!darkMode),
      name:darkMode ? "Light Mode" : "Dark Mode",
      icon:darkMode ?<LightModeRounded/> : <DarkModeRounded/>,
    },
    {
      fun:()=>console.log("Upload"),
      name:"Log Out",
      icon: <LogoutRounded/>,
    },
  ];
  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
      <Logo>
        <Image src={LogoImage}/>
        PodiGo
        </Logo>
      <Close onClick={()=>setMenuOpen(false)}>
        <CloseRounded/>
      </Close>
      </Flex>
      {menuItems.map((item)=>(
        <Link to={item.link} style={{textDecoration: "none"}}>
        <Elements>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
        </Link>
      ))
      }
      <HR/>
      {button.map((item)=>(
        <Elements onClick={item.fun}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Elements>
      ))
      }
    </MenuContainer>
  )
}

export default Sidebar
