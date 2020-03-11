import React from 'react';
import { useForm } from '../hooks/useForm';
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
            <form onSubmit={ handleSubmit } >
                <fieldset>
                    <legend>Add New Client</legend>
                    <input type="text" value={ values.username } onChange={ handleChanges } name="username"/>
                    <input type="text" value={ values.email } onChange={ handleChanges } name="email"/>
                    <button>Clear</button> <button>Submit</button>S
                </fieldset>
            </form>
        </>
    )
}