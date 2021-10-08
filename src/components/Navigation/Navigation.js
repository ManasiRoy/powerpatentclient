import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './Navigation.styles'
import NavDropdown from 'react-bootstrap/NavDropdown'


const Navigation = ({ menu, url }) => {

    return (
        <ul className="navbar-nav ms-auto">
            {menu.map(mainItem =>
                !mainItem.parentId ? (
                    <>
                        <li key={mainItem.id}>
                            <Link to={mainItem.path} className="nav-link" activeClassName="nav-active">
                                {mainItem.childItems.nodes.length < 1 && <div>{mainItem.label}</div>}
                                {mainItem.childItems.nodes.length > 0 ? (
                                    <NavDropdown title={mainItem.label}>
                                        {mainItem.childItems.nodes.map(childItem => (
                                            <NavDropdown.Item key={childItem.id} className="dropdown-item" >
                                                <Link to={childItem.path} className="nav-link" activeClassName="nav-active">
                                                    {childItem.label}
                                                </Link>
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                ) : null

                                }
                            </Link>
                        </li>


                    </>
                ) : null
            )


            }

        </ul>
    )
}

export default Navigation;
