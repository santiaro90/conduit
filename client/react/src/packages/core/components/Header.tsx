import React, { FunctionComponent } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { NavLink as RNavLink } from 'react-router-dom';

import { routes } from 'packages/config';

import styles from './styles/Header.module.css';

const Header: FunctionComponent<{}> = () => (
  <header className={styles.wrapper}>
    <Navbar>
      <NavbarBrand className={styles.brand}>conduit</NavbarBrand>

      <Nav>
        <NavItem>
          <NavLink
            activeClassName="active"
            className={styles.link}
            tag={RNavLink}
            to={routes.login}
          >
            Sign In
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            activeClassName="active"
            className={styles.link}
            tag={RNavLink}
            to={routes.signUp}
          >
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
