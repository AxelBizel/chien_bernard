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

const NavbarComponent = () => {
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
          <Nav className="mr-auto" navbar>
            <ul>
              <NavItem>
                <li>
                  <NavLink href="#bio">Bio</NavLink>
                </li>
              </NavItem>
            </ul>
            <NavItem>
              <NavLink href="#music">Music</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#video">Video</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#media">Media</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#footer">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default NavbarComponent;
