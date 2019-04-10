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
                            {this.props.isAuth && (
								<NavItem>
									<NavLink to="/add-post" className="nav-link">
										Add post
									</NavLink>
								</NavItem>
							)}
							<NavItem>
								{this.props.isAuth ? (
									<NavLink to="/logout" className="nav-link">
										Logout
									</NavLink>
								) : (
									<NavLink to="/auth" className="nav-link">
										Login
									</NavLink>
								)}
							</NavItem>
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