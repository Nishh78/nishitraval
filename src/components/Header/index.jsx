import React, { useEffect, useRef } from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./elements";

const Header = ({ toggle }) => {

  const headerContainerRef = useRef(null);

  useEffect(() => {
    let header = headerContainerRef.current;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.background = "rgb(39, 19, 65)"
      } else {
        header.style.background = "transparent"
      }
    })
  })

  return (
    <div className="Container" ref={headerContainerRef}  style={{ padding: 0 }}>
      <Nav>
        <Logo to="/" className="header-logo">
          <span>{'{'}</span><span>N</span><span>{'}'}</span>
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="skills">
            Skills
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
