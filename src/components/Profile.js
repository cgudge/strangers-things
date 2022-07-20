import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const URL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B';

const Profile = (props) => {
	const token = localStorage.getItem('token');
	const [userInfo, setUserInfo] = React.useState({
		data: {
			username: '',
			messages: [],
		},
	});

	const getMe = async (token) => {
		try {
			const { data } = await axios.get(`${URL}/users/me`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			setUserInfo(data);
			console.log(data);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		getMe(token);
	}, [token]);

	return (
		<div>
			<h1>Hello, {userInfo.data.username}</h1>
			<h2>
				You currently have {userInfo.data.messages.length} messages!
			</h2>
		</div>
	);
};

export default Profile;
