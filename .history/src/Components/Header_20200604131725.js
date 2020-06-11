//Modules
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

//Images
import ProfileImage from "../Images/profile_picture.png";
import Logo from "../Images/logo.png";
import Logo2 from "../Images/logo2.png";

function Header(props) {
  const { onClick, open } = props;


  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };

  const BurgerMenu = styled.div`
width: 90px;
cursor: pointer;
color: ${props => props.theme.colors.black};
margin-left: 20px;
margin-top: 10px;
`;

  const BurgerIcon = styled.div` //menu icon styling
margin: 12px 0 0 4px;
width: 40%;
border: 1px solid ${props => props.theme.colors.white};;
border-radius: 10px;
border-width: 2px;
`;

  const MenuWrapper = styled.div`
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
width: 300px;
overflow: hidden;
background-color: ${props => props.theme.colors.red};
padding-top: 1%;
left: 0;
position: fixed;
height: 1000px;
top: 0;
display: flex;
@media (max-width: 640px) {
  text-align: center;
  width: 100%;
  overflow: hidden;
  position:fixed;
}

`;

  const Wrapper = styled.div` 
background-color: ${props => props.theme.colors.red};
padding-bottom: 10px;
height: 70px;
z-index: -1;
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 640px) {
  position: fixed;
}
`;


  const ProfileStyling = styled.img` 
width: 60px;
height: 60px;
padding-top: 10px;
padding-right: 10px;
`;

  const HeaderLogo = styled.img` 
width: 40px;
height: 65px;
display: block;
margin-right: 50px;
margin-top: 10px;
`;

  return (
    <div>
      <MenuWrapper open={open}>
        <Menu onClick={handleClick} /> {/* used to close menu. */}
      </MenuWrapper>

      <Wrapper>
        <BurgerMenu onClick={handleClick}> {/* used to open menu. */}
          <BurgerIcon /> {/* burgermenu line. */}
          <BurgerIcon /> {/* burgermenu line. */}
          <BurgerIcon /> {/* burgermenu line. */}
        </BurgerMenu>
        <HeaderLogo src={Logo2} /> {/* Logo Image. */}
        <ProfileStyling src={ProfileImage} /> {/* User Image. */}
      </Wrapper>
    </div>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

const ComponentHeading = styled.h2`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-size: 36px;
  font-family: 'Merriweather Sans', sans-serif;
  margin-bottom: 15px;
  @media (max-width: 640px) {
    text-align: center;
    width: 100%;
}
`;

const Nav = styled.nav`
    align-items: center;
    z-index: 10;
    @media (max-width: 640px) {
      text-align: center;
      width: 100%;
  }
`;

const NavText = styled.li`
  color: ${props => props.theme.colors.white};
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  @media (max-width: 640px) {
    text-align: center;
    width: 100%;
    font-size: 20px;
}
`;

const NavLi = styled.li`
  margin-bottom: 10%;
  cursor: pointer;
  width: 100%;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.red};
  @media (max-width: 640px) {
    text-align: center;
    width: 100%;
    height: 20px;

}
`;

const NavClose = styled.p`
  text-align: center;
  display: table-cell;
  vertical-align: bottom;
  border: 1px solid ${props => props.theme.colors.red};
  height: 150px;
  font-family: 'Merriweather Sans', sans-serif;
  font-size: 40px;
  width: 400px;
  color: white;
  @media (max-width: 640px) {
    height: 50px;
    font-size: 25px;
}
`;

const MenuImage = styled.img` 
width: 100px;
height: 120px;
display: block;
margin: 0 auto;
@media (max-width: 640px) {
  margin-top: 20px;
  height: 120px;
  font-size: 20px;
}
`;


function Menu(props) {
  const { onClick } = props;
  const location = useLocation();


  return (
    <Nav>
      <MenuImage src={Logo} />
      <ComponentHeading>Menu</ComponentHeading>
      <NavLi active={location.pathname === "/"}>
        <Link to="/Dashboard"> <NavText>Dashboard</NavText> </Link>{" "} {/* link to dashboard. */}
      </NavLi>
      <NavLi active={location.pathname === "/Profile"}>
        <Link to="/Profile"> <NavText>Profile</NavText> </Link>{" "} {/* link to profile. */}
      </NavLi>
      <NavLi active={location.pathname === "/Profile"}>
        <Link to="/Assignments"> <NavText>Assignments</NavText> </Link>{" "} {/* link to assignments. */}
      </NavLi>
      <NavLi active={location.pathname === "/Contact"}>
        <Link to="/Contact"> <NavText>Contact</NavText> </Link>{" "} {/* link to feedback. */}
      </NavLi>
      <NavLi active={location.pathname === "/Login"}>
        <Link to="/login"> <NavText>Logout</NavText> </Link>{" "} {/* link to login (can't figure out how authenticate login/logout so this is the solution). */}
      </NavLi>
      <NavClose onClick={onClick}> Close </NavClose>
    </Nav>
  );
}

Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};


export default Header;