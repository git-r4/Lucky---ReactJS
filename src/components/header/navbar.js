import React from 'react';
import {NavLink} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

//icons
import { GoSettings } from 'react-icons/go';

//components
import { NavbarData } from "./navbarData";

const Navbar = () => {

    const renderNavbarData = NavbarData.map(({id, name, icon, activeIcon}) => {
        return(
            <li key={id}>
                <NavLink>
                    {name}
                </NavLink>
            </li>
        )
    })

    return(
        <div className="navbar">
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div className="navbar_category">
                            <div className="navbar_category_title">
                                <GoSettings />
                                <span>Kateqoriyalar</span>
                            </div>
                            <div className="navbar_category_info">

                            </div>
                        </div>
                    </Col>
                    <Col lg={8} md={8} sm={12}>
                        <ul className="navbar_box">
                            {renderNavbarData}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Navbar;