import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL =
	'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B';

const Register = (props) => {
	let navigate = useNavigate();
	let setToken = props.setToken;
	let setIsLoggedIn = props.setIsLoggedIn;

	let user = { username: '', password: '' };

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const resp = await axios.post(`${API_URL}/users/register`, {
				user,
			});
			console.log(resp);
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
			<h2>Create account to continue</h2>
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
				</div>
			</div>
		</>
	);
};

export default Register;
