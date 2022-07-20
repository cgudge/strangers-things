import React, { useEffect } from 'react';
import axios from 'axios';
const URL =
	'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT-B/posts';

const Posts = () => {
	const [posts, setPosts] = React.useState([]);

	const fetchMessages = async () => {
		try {
			const { data } = await axios.get(`${URL}`);
			setPosts(data?.data?.posts);
			console.log(data?.data?.posts);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		fetchMessages();
	}, []);

	return (
		<div className='post-section'>
			{posts.map((post) => {
				if (post.active) {
					return (
						<div className='post' key={post._id}>
							<h2>{post.title}</h2>
							<h3>{post.price}</h3>
						</div>
					);
				}
			})}
		</div>
	);
};

export default Posts;
