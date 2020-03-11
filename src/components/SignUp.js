import React from 'react';
import { useForm } from '../hooks/useForm';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
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
        alert(values.username);
        clearForm(e);
    };

    return ( 
        <> 
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
                <Button>Clear</Button> <Button>Submit</Button>
            </Form>
        </>
    )
}