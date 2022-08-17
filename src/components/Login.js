import React, { Link } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL =
	'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B';

function Login(props) {
	localStorage.removeItem('token');
	let user = { username: '', password: '' };
	let setToken = props.setToken;
	let setIsLoggedIn = props.setIsLoggedIn;
	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(`${API_URL}/users/login`, { user });
			const accessToken = resp?.data?.data?.token;
			setToken(accessToken);
			localStorage.setItem('token', accessToken);
			setIsLoggedIn(true);
			navigate('/profile');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<h1>Welcome to Stranger's Things</h1>
			<h2>Please login to continue</h2>
			<div className='inputs'>
				<div className='form'>
					<form onSubmit={submitHandler}>
						<input
							className='input'
							placeholder='Username'
							required={true}
							type='text'
							id='username'
							onChange={(e) => {
								user.username = e.target.value;
							}}
						/>
						<input
							className='input'
							placeholder='Password'
							required={true}
							type='password'
							id='password'
							onChange={(e) => {
								user.password = e.target.value;
							}}
						/>
						<button type='submit'>Submit</button>
					</form>

					<span className='input-border'></span>

					<span className='input-border'></span>
					<h3>
						<a href='/register'>Need to create an account?</a>
					</h3>
				</div>
			</div>
		</>
	);
}

export default Login;
