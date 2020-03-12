import React from 'react';
import { useForm } from '../hooks/useForm';

import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import './Styles.css';

export default function SignUp() {

    const [values, handleChanges, clearForm] = useForm('newClient',
        {
            username:'',
            email:''
        }
    );

    const handleSubmit = e => {
        e.preventDefault();
        alert('Username: ' + values.username + '\nEmail: ' + values.email);
        clearForm(e);
    };

    return ( 
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h1>Sign Up</h1> 
                <Form onSubmit={ handleSubmit } >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input 
                            type="text" 
                            name="username" 
                            id="username" 
                            placeholder="Username"
                            autoComplete="off"
                            value={ values.username } 
                            onChange={ handleChanges }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            autoComplete="off"
                            value={ values.email } 
                            onChange={ handleChanges }
                        />
                    </FormGroup>
                    <Button color="secondary" size="lg" block>Clear</Button> <Button block size="lg" color="success">Submit</Button> 
                </Form>
            </Col>
        </Row>
    )
}