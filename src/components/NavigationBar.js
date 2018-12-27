import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {
    faGithub
} from "@fortawesome/free-brands-svg-icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavigationBar(props){

    return (
        <Navbar color="primary" dark expand="md">
            <NavbarBrand href="#">Spotifood</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/hashiCode/ifood-frontend-test">
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                </NavLink>
              </NavItem>
              </Nav>
        </Navbar>
    )
}