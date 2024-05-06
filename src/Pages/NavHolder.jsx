import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavHolder = () => {
  return (
    <Navs>
      <Ul>
        <A to="/home">Home</A>
        <A to="/about">About</A>
        <A to="/services">Services</A>
        <A to="/contact">Contact</A>
        <Button>
          <ButtonOne to="/signin">Login</ButtonOne>
          <ButtonTwo to="/register">Register</ButtonTwo>
        </Button>
      </Ul>
    </Navs>
  );
};

export default NavHolder;

const ButtonTwo = styled(NavLink)`
  padding: 4px 20px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: black;
  }
`;
const ButtonOne = styled(NavLink)`
  padding: 4px 25px;
  background-color: black;
  border: 1px solid orange;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: orange;
  }
`;
const Button = styled.div`
  width: 200px;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 10px;
  justify-content: center;
`;
const A = styled(NavLink)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  :hover {
    color: orange;
    transition: all 300ms eased-in-out;
  }
  &.active {
    color: orange;
`;
const Ul = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  list-style: none;
`;
const Navs = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  background-color: black;
  top: 70px;
  right: 10px;
  border-radius: 0px 0px 50px 50px;
`;
