import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../Navigation/Navigation';
import { useMenuQuery } from '../../hooks/useMenuQuery';

import Logo from "../../images/logo.png";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    const { site, menu } = useMenuQuery();
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="logo">
                        <img src={Logo} alt={site.siteMetadata.title} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navigation menu={menu.menuItems.nodes} />
                    <Link to="https://www.corpnet.com/?PID=1411&PID=1411/" target="_blank" className="btn btn-primary m-2"> Referral</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
