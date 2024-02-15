import React, { useState, ChangeEvent, FormEvent } from 'react';
import LoginService from '../services/LoginService';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await LoginService.login(
                email,
                password
            );

            // Redirect to the dashboard page
            navigate('/dashboard');
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <InputText type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <Password type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default LoginPage;