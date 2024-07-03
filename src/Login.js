import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.stopPropagation();
      } else {
        onLogin(username, password);
      }
      setValidated(true);
    };

    return (
        <Container className='d-flex mw-100 pe-0'>
            <Col md={5} lg={5} className="d-flex flex-column justify-content-center">
                <h2 className='text-center'>Welcome back!</h2>
                <p className='text-center text-muted'>Log in to continue learning</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="mx-auto w-50">
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="username"
                            placeholder="Username*"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a username.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Control
                            type={"password"}
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please enter a password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className="w-100" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Col>
            <Col md={7} className="p-0">
                <img src="rightpanel.png" alt="rightpanel" className="w-100 vh-100" style={{ objectFit: 'fill' }} />
            </Col>
        </Container>
    );
};

export default Login;