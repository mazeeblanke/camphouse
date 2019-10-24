import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from 'antd';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

    <div>
    <Navbar light expand="md">
      <div className="container">
        <NavbarBrand href="/">Camphouse</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-3">
              <Button shape="round" size="large" type="danger" ghost>
                List your space
              </Button>
            </NavItem>
            <NavItem>
              <Button shape="round" size="large" type="primary">
                Download App
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
