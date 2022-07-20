import axios from 'axios';
// https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B
const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT_NAME = '2206-FTB-ET-WEB-FT-B';
const API_URL = BASE_URL + COHORT_NAME;

export async function getMe(token) {
	try {
		const { data } = await axios.get(`${API_URL}/users/me`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		return data;
	} catch (error) {
		throw error;
	}
}

export async function login(user) {}

export async function getPosts() {
	try {
		const { data } = await axios.get(`${API_URL}/posts`);
		// const {posts} = data;

		return data;
	} catch (error) {
		console.log(error);
	}
}

export async function createAcount(tempUser) {
	fetch(
		'https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: {
					username: tempUser.username,
					password: tempUser.password,
				},
			}),
		}
	)
		.then((response) => {
			response.json();
		})
		.then((result) => {
			console.log(result);
		})
		.catch(console.error);
	try {
		const { data } = await axios.post(
			`${API_URL}/users/register`,
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
			{
				body: {
					user: {
						username: tempUser.username,
						password: tempUser.password,
					},
				},
			}
		);
		return data;
	} catch (error) {
		console.log(error);
	}
}
