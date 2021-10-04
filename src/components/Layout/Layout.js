import React, { children, useState } from 'react'
import Hamburger from '../Hamburger/Hamburger';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOverlayMenu = () => setMenuOpen(prev => !prev)

    return (
        <>
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
            <Header />
            <>{children}</>
            <Footer />
        </>
    )
}

export default Layout;