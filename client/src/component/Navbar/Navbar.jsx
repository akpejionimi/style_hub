import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink as BstNavLink,
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }))
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md" className="mb-5">
                    <NavbarBrand>
                        Style_hub
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <input type="text" placeholder="Search"/>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/login" className="nav-link">login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/sign-up" className="nav-link">Sign up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;