import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

               {/* all-link-here */}
               
                <Nav className="me-auto p-0">
                    <NavLink className="text-decoration-none text-white fs-5 px-3" to="/home" activeStyle={{fontWeight: "bold",
                                                color: "red",
                                                backgroundColor: "blue"
                                            }}>Home</NavLink>
                    <NavLink className="text-decoration-none text-white fs-5 px-3" to="/services" activeStyle={{fontWeight: "bold",
                                                color: "red",
                                                backgroundColor: "blue"
                                            }}>Services</NavLink>
                    <NavLink className="text-decoration-none text-white fs-5 px-3" to="/about" activeStyle={{fontWeight: "bold",
                                                color: "red",
                                                backgroundColor: "blue"
                                            }}>About</NavLink>
                    <NavLink className="text-decoration-none text-white fs-5 px-3" to="/details" activeStyle={{fontWeight: "bold",
                                                color: "red",
                                                backgroundColor: "blue"
                                            }}>Details</NavLink>
                    
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;