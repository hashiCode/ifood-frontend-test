import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Jumbotron
} from 'reactstrap';
import './css/Login.scss'
import {
    faSpotify
} from "@fortawesome/free-brands-svg-icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    intlShape,
    injectIntl,
} from 'react-intl';

function Login (props){
    const {messages} = props.intl
    return (
        <Container className="h-100">
            <Row className="align-items-center h-100">
                <Col xs={8} className="mx-auto">
                    <Jumbotron className="text-center justify-content-center">
                        <h1 className="display-4 mb-5">Spotifood</h1>
                        <Button color="primary" type="submit" size="lg"
                            onClick={() => window.location=`https://accounts.spotify.com/authorize?response_type=token&client_id=dc93f6595d574d0b8f8b35eba887e41d&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}>
                             <FontAwesomeIcon icon={faSpotify} size="lg"/> {messages["login.button"]}
                            </Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

Login.propTypes = {
    intl: intlShape.isRequired,
};

export default injectIntl(Login)