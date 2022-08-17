import React from 'react';
import axios from 'axios';

const API_URL =
	'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B';

const CreatePost = () => {
	const submitHandler = async (e) => {
		e.preventDefault();
		console.log(post);
		let token = localStorage.getItem('token');
		console.log(token);
		try {
			let resp = await axios.post(
				`${API_URL}/posts`,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				},
				{
					body: {
						post,
					},
				}
			);
			console.log(resp);
		} catch (error) {
			console.log(error);
		}
	};
	let post = {
		title: '',
		description: '',
		price: '',
		location: 'On Request',
		willDeliver: false,
	};

	return (
		<div>
			<h1>Create New Post</h1>
			<form onSubmit={submitHandler}>
				<h3>Title</h3>
				<input
					required
					type='text'
					onChange={(e) => {
						post.title = e.target.value;
					}}
				/>
				<h3>Description</h3>
				<input
					type='text'
					onChange={(e) => {
						post.description = e.target.value;
					}}
				/>
				<h3>Location</h3>
				<input
					type='text'
					onChange={(e) => {
						post.location = e.target.value;
					}}
				/>
				<h3>Delivery?</h3>
				<input
					type='checkbox'
					onChange={(e) => {
						post.willDeliver = !post.willDeliver;
						console.log(post.willDeliver);
					}}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default CreatePost;
