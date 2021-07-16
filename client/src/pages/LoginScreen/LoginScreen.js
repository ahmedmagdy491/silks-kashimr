import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../SignUpScreen/SignUpScreen.css';

import { login } from '../../actions/userActions';
import Message from '../../components/Message';
import Loader from '../../components/Loader/Loader';

const SignUpScreen = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, userInfo, error } = userLogin;

    // useEffect(() => {
    //     if (userInfo) {
    //         history.push('/');
    //     }
    // }, [userInfo, history]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password));
    };

    return (
        <div className='form-container'>
            <h1>Login</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <form className='signup-form' onSubmit={submitHandler}>
                <div className='content'>
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
                </div>
                <button className='signup-button' type='submit'>
                    LOGIN
                </button>
                <p className='signup-p'>
                    Don’t Have an Account? <Link to='/signup'>Sign Up</Link>{' '}
                </p>
            </form>
        </div>
    );
};

export default SignUpScreen;
