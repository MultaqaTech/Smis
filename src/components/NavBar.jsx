import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setisLogin } from '../slices/userSlise';
import '../App.css';
const NavBar = () => {
	const { user } = useSelector((state) => state);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const LogOut = () => {
		dispatch(setisLogin(false));
		navigate('/');
	}
    return (
<header>
<div class="container">
	<div class="treehadsheader">
		<div class="treehadsheader1">
			<div class="logohead"><Link to="/"><img src="Logo.svg"/></Link></div>
			{user.isLogin ? 
			<div class="thobutts_headers">
				<Link class="iconslk" to="/lk"></Link>
				<div class="notylk">
					<span class="iconnoty"> <span class="iconnoty-count"></span> </span>
					<span class="iconnoty-data">
					<span class="iconnoty-data-item">[risk assessment submitted by  at , etc.]</span>
					</span>
				</div>
			</div>
			: <></>
			}
		</div>
		<div class="treehadsheader2">
			<nav class="hmenu">
				<ul>
					<li class="sublink"><Link to="/about">About Us</Link>
					<div class="hoverslinks">
						<ul>
							<li class="sublink"><Link to="/gettoknow">Who we are</Link></li>
							<li class="sublink"><Link to="/contractors">CONTRACTORS</Link></li>
						</ul>
					</div>
					</li>
					<li><Link to="/solutions">Solutions</Link></li>
					{user.isLogin ? 
					<li><Link type='button' onClick={LogOut}>Log out</Link></li>
					:
					<li><Link class="jsgetlogin" to="/">Login/Sign Up</Link></li>
					}
					<li><Link to="/contacts">Contact Us</Link></li>
				</ul>
			</nav>
		</div>
	</div>
</div>
</header>
    )
  }


export default NavBar