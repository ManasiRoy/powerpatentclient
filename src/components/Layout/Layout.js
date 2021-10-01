import React, { children, useState } from 'react'
import { GlobalStyles, Primary } from "./Layout.styles"
import Hamburger from '../Hamburger/Hamburger';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOverlayMenu = () => setMenuOpen(prev => !prev)

    return (
        <>
            <GlobalStyles />
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
            <Header />
            <Primary>{children}</Primary>
            <Footer />
        </>
    )
}

export default Layout;