import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SignUpScreen.css';

import { signup } from '../../actions/userActions';
import Message from '../../components/Message';

const SignUpScreen = ({ history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userSignup = useSelector((state) => state.userSignup);
    const { loading, userInfo, error } = userSignup;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [userInfo, history]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(signup(name, email, password));
            setMessage(null);
        }
    };

    return (
        <div className='form-container'>
            <h1>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            <form className='signup-form' onSubmit={submitHandler}>
                <div className='content'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='signup-button' type='submit'>
                    SIGN UP
                </button>
                <p className='signup-p'>
                    Have an Account? <Link to='/login'>Login</Link>{' '}
                </p>
            </form>
        </div>
    );
};

export default SignUpScreen;
