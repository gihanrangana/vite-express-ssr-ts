import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from './Layout.module.scss'

const Layout: React.FC<LayoutProps> = (props) => {

    return (
        <>
            <nav className={styles.navWrapper}>
                <ul className={styles.nav}>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"contact"}>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

interface LayoutProps {
    [key: string]: any
}

export default Layout;