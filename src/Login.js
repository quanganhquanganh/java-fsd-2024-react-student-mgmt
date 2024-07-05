import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
      if (validated && !user) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    }, [validated, user]);

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (form.checkValidity() === false) {
        e.stopPropagation();
      } else {
        dispatch({ type: 'LOGIN', payload: { username, password } });
        
      }
      setValidated(true);
    };

    return (
        <>
            {showAlert && (
                <div className='position-absolute w-100 d-flex justify-content-center'>
                    <Alert
                        className=''
                        variant='danger'
                        onClose={() => setShowAlert(false)} 
                        style={{ top: 0, left: 0, zIndex: 1000 }}
                    >
                        I don't know you bro.
                    </Alert>
                </div>
            )}
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
        </>
    );
};

export default Login;