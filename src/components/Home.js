import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>
				Hi welcome to{' '}
				<span className='accent-text'>Stranger's Things!</span>
			</h1>
			<h2>
				Feel free to{' '}
				<Link to='/posts'>
					<span className='accent-text-h2'>browse</span>
				</Link>{' '}
				without an account or{' '}
				<Link to='/login'>
					<span className='accent-text-h2'>login</span>
				</Link>{' '}
				to begin messaging.
			</h2>
		</div>
	);
};

export default Home;
