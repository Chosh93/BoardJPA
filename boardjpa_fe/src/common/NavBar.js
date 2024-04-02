import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="게시판" id="basic-nav-dropdown">
              <NavDropdown.Item href="/board">게시판 목록</NavDropdown.Item>
              <NavDropdown.Item href="/board/ajaxList">게시판 목록 Ajax</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TEST" id="basic-nav-dropdown">
              <NavDropdown.Item href="/test/gugudan">구구단</NavDropdown.Item>
              <NavDropdown.Item href="/test/color">색깔</NavDropdown.Item>
              <NavDropdown.Item href="/test/sequence">시퀀스</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/calc">계산기</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NavBar;