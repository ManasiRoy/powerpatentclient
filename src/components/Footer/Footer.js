import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../FooterNavigation/Navigation';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import Logo from "../../images/logo.png";
import mailIcon from "../../images/email.png";

const Footer = () => {
    const { site, menu } = useMenuQuery();
    return (
        <footer className="footer text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="mb-2">
                            <Link to="/" className="logo">
                                <img src={Logo} alt={site.siteMetadata.title} />
                            </Link>
                        </div>
                        <div className="mb-4">
                            <div className="email-outr">
                                <img src={mailIcon} alt="mail" />
                                <Link to="mailto:info@powerpatent.com">info@powerpatent.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Navigation menu={menu.menuItems.nodes} />
                    </div>
                </div>
            </div>

            <div className="text-center bg-primary text-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center py-2">
                            <ul className="justify-content-center ulText">
                                <li><div className="copyright">&copy; 2021 Copyright</div></li>
                                <li>
                                    <Link to="/terms">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer;
