import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top" id="Navbar">
      <ReactstrapNavbar className="navbar-bg" dark expand="sm">
        <NavbarBrand href="#header">
          <FontAwesomeIcon icon={faHome} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar onClick={toggle}>
            <NavItem>
              <NavLink href="#bio">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#music">Écouter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#concerts">Concerts</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#video">Vidéo</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#media">Media</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default NavbarComponent;
