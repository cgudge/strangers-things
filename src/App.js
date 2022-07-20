import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate,
} from 'react-router-dom';
import { useState } from 'react';
import Posts from './components/Posts';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
	const [user, setUser] = useState({ name: '', password: '' });
	const [token, setToken] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className='App'>
			<Router>
				<div className='navbar'>
					<h1>Stranger's Things</h1>
					<navbar>
						<Link className='link' to='/home'>
							Home
						</Link>
						<Link className='link' to='/posts'>
							Posts
						</Link>
						<Link className='link' to='/Profile'>
							Profile
						</Link>
						<Link className='link' to='/login'>
							Login/Logout
						</Link>
					</navbar>
				</div>
				<div className='main'>
					<Routes>
						<Route
							path='/login'
							element={
								<Login
									user={user}
									setUser={setUser}
									setToken={setToken}
									token={token}
									setIsLoggedIn={setIsLoggedIn}
								/>
							}
						/>
						<Route path='/posts' element={<Posts user={user} />} />
						<Route path='/home' element={<Home />} />
						<Route
							path='/profile'
							element={
								<Profile
									token={token}
									user={user}
									setUser={setUser}
								/>
							}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
