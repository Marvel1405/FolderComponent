import styled from "@emotion/styled";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import NavHolder from "../Pages/NavHolder";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <Container>
      <Holder>
        <Logo>
          <h1>Bottle</h1>
        </Logo>
        <Navs>
          <Ul>
            <A to="/home">Home</A>
            <A to="/about">About</A>
            <A to="/services">Services</A>
            <A to="/contact">Contact</A>
          </Ul>
        </Navs>
        {showMenu && <NavHolder />}
        <Button>
          <ButtonOne to="/signin">Login</ButtonOne>
          <ButtonTwo to="/register">Register</ButtonTwo>
        </Button>
        <Hamburger onClick={handleMenu}>
          <MdMenu />
        </Hamburger>
      </Holder>
    </Container>
  );
};

export default Header;

const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
  }
  // @media (min-width: 426px) and (max-width: 768px) {
  //   display: block;
  // }
`;
const ButtonTwo = styled(NavLink)`
  margin-left: 10px;
  padding: 4px 20px;
  background-color: orange;
  color: black;
  border: none;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;
  &.active {
    color: black;
  }
  // @media (max-width: 425px) {
  //   display: none;
  // }
  // @media (min-width: 426px) and (max-width: 768px) {
  //   display: none;
  // }
`;
const ButtonOne = styled(NavLink)`
  padding: 4px 20px;
  background-color: black;
  border: 1px solid orange;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &.active {
    color: orange;
  }
  // @media (max-width: 425px) {
  //   display: none;
  // }
  // @media (min-width: 426px) and (max-width: 768px) {
  //   display: none;
  // }
`;
const Button = styled.div`
  width: 200px;
  height: 40%;
  @media (max-width: 768px) {
    display: none;
  }
  // @media (min-width: 426px) and (max-width: 768px) {
  //   display: none;
  // }
`;
const A = styled(NavLink)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  :hover {
    color: lightgray;
    transition: all 300ms eased-in-out;
  }
  &.active {
    color: orange;
  }
  // @media (max-width: 425px) {
  //   display: none;
  // }
  // @media (min-width: 426px) and (max-width: 768px) {
  //   display: none;
  // }
`;
const Ul = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
`;
const Navs = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  @media (max-width: 768px) {
    display: none;
  }
  //   @media (min-width: 425px) and (max-width: 768px) {
  //     display: none;
  //   }
  //
`;
const Logo = styled.div`
  font-weight: bold;
  cursor: pointer;
  :hover {
    color: orange;
    transition: all 300ms eased-in-out;
  }
`;
const Holder = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
  // @media (min-width: 425px) and (max-width: 768px) {
  //   width: 90%;
  //   height: 100%;
  // }
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  z-index: 100;
  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
  }
  // @media (min-width: 425px) and (max-width: 768px) {
  //   width: 100%;
  //   height: 70px;
  // }
`;
