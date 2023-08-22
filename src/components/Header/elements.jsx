import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(ScrollLink)`
  padding: 0.4rem 0.6rem;
  font-weight: bold;
  color: rgb(219, 191, 253);
  text-decoration: none;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 5px;
  transition: background 0.2s ease-in-out 0s;
  &:hover {
    color: rgba(198, 153, 252, 0.125);
  }
`;
export const Logo = styled('div')`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
