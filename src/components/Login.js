import React from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Jumbotron
} from 'reactstrap';
import './css/Login.scss'

export default function Login (props){

    return (
        <Container className="h-100">
            <Row className="align-items-center h-100">
                <Col xs={6} className="mx-auto">
                    <Jumbotron className="text-center ">
                        <h3 className="display-4">Spotifood</h3>
                        <Button color="primary" type="submit" size="lg"
                            onClick={() => window.location=`https://accounts.spotify.com/authorize?response_type=token&client_id=dc93f6595d574d0b8f8b35eba887e41d&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}>Login</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}