import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavTop.css';

const NavTop = () => (
  <Navbar className="NavTop">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Blitzcranky</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
        <NavItem eventKey={2}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
        <NavItem eventKey={3}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
        <NavItem eventKey={4}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
        <NavItem eventKey={5}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
        <NavItem eventKey={6}><img src="http://ddragon.leagueoflegends.com/cdn/6.14.2/img/champion/Cassiopeia.png" alt="Cassiopeia" /></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavTop;
