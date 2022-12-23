import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//icons
import { BiSearchAlt } from 'react-icons/bi';
import { BsHeartFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';

//components
import logo from '../../images/images/logo/logo-header.svg';

const SearchNav = () => {
    return(
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="searchNav">
                        <div className="searchNav_logo">
                            <img src={logo} alt="lucky_brand_logo" />
                        </div>
                        <div className="searchNav_searchBox">
                            <div className="searchNav_searchBox_search">
                                <input type="search"  placeholder="Axtar..."/>
                                <BiSearchAlt />
                            </div>
                        </div>
                        <div className="searchNav_info">
                            <Link to="#"><FaShoppingCart /></Link>
                            <Link to="#"><BsHeartFill /></Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default SearchNav;