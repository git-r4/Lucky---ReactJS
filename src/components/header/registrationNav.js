import { Container, Row, Col } from 'react-bootstrap';

const RegistrationNav = () => {
    return(
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="registrationNav">
                        <button type="button"
                                className="registrationNav_signIn">
                            Daxil ol
                        </button>
                        <button type="button"
                                className="registrationNav_registration">
                            Qeydiyyat
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default RegistrationNav;