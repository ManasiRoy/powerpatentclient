import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../Navigation/Navigation';
import { Wrapper, Content } from "./Header.styles";
import { useMenuQuery } from '../../hooks/useMenuQuery';

import Logo from "../../images/logo.png";


const Header = () => {
    const { site, menu } = useMenuQuery();
    return (
        <Wrapper>
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-4 align-self-center">
                        <Link to="/" className="logo">
                            <img src={Logo} alt={site.siteMetadata.title} />
                        </Link>
                    </div>
                    <div className="col-md-8 align-self-center text-lg-end">
                        <Navigation menu={menu.menuItems.nodes} />
                    </div>


                </div>
            </div>
        </Wrapper>
    )
}

export default Header;
