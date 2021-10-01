import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../FooterNavigation/Navigation';
import { useMenuQuery } from '../../hooks/useMenuQuery';
import Logo from "../../images/logo.png";
import mailIcon from "../../images/mail-icon.svg";

const Footer = () => {
    const { site, menu } = useMenuQuery();
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="mb-2">
                            <Link to="/">
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
        </section>
    )
}

export default Footer;
