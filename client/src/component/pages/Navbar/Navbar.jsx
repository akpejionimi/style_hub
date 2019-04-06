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
                <Navbar color="danger" dark expand="md" className="mb-5">
                    <NavbarBrand>
                        Style_hub
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/auth" className="nav-link">login/SignUp</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink to="/sign-up" className="nav-link">Sign up</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <input type="text" placeholder="Search" />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;