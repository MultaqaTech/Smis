import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { Modal} from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUserId, setToken, setisLogin } from '../slices/userSlise';
//import axios from 'axios';
import '../App.css';
const Main = () => {
	const [openLogin , setOpenLogin] = useState(false)
	const [openSignUp , setOpenSignUp] = useState(false)
	const [username, setName] = useState("");
    const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { user } = useSelector((state) => state);
	console.log("state", user)
  	const dispatch = useDispatch();
	const handleOnSubmitLogin = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:3001/login', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
		console.log("login result", result)
        if (result) {
			dispatch(setToken(result));
			dispatch(setisLogin(true));
            setPassword("");
            setName("");
			navigate('/lk');
        }
    }
    const handleOnSubmitSignUp = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:3001/', {
            method: "post",
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
		console.log("signup result", result)
        if (result) {
			dispatch(setisLogin(true));
			dispatch(setCurrentUserId(result.user.id));
            setPassword("");
            setName("");
			navigate('/lk');
        }
    }
	const closeModalLogin = () => {
		setOpenLogin(false)
	}
	const closeModalSignUp = () => {
		setOpenSignUp(false)
	}
	
	return (
	<div>
	<main>
		<div class="container">
		<div class="thohalfs">
			<div class="thohalfs-l">
				<div class="aboutforms">
					<div class="formstitle">Register Hazard & Risk Assesment </div>
					<form class="preform1" method="post" action="/local/api/formpart1.php">
						<input type="text" placeholder="Name" name="Name" value=""/>
						<input type="text" placeholder="Date" name="Date" value=""/>
						<input type="text" placeholder="Time" name="Time" value=""/>
						<input type="text" placeholder="Location" name="Location" value="Yohanasburg"/>
						<input type="text" placeholder="Task Assessment" name="Task"/>
						<input type="submit" placeholder="" value="SUBMIT"/>
					</form>
				</div>
			</div>
			<div class="thohalfs-r">
				<div class="about-mains">
					<div class="about-mains-t1"><span>SIMS</span> SOLUTIONS</div>
					<div class="about-mains-t2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> 
					sed do eiusmod tempor incididunt ut labore et dolore <br/> 
					magna aliqua. <br/> 
					<br/>
					Ut enim ad minim veniam, quis nostrud<br/> 
					exercitation ullamco laboris nisi ut aliquip ex ea commo<br/> 
					do consequat. <br/> 
					<br/>
					Lorem ipsum dolor sit amet, consectetur <br/> 
					adipiscing elit, sed do eiusmod tempor incididunt ut <br/> 
					labore et dolore magna aliqua. 
					</div>
					<div class="about-mains-t3">
						<div class="about-mains-butts">
							<a class="jsgetlogin" type="button" onClick={() => setOpenLogin(true)}>Log in</a>
							<a class="jsgetlogin" type="button" onClick={() => setOpenSignUp(true)}>Sigh up</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</main>
	<div>
		<Modal style={{padding: 0}} open={openLogin} onCancel={closeModalLogin}  id="getmylogin" class="fancybox-content" footer={null}>
		<div class="pop-container aboutforms">
			<div class="pop-container-tabs">
				<div type="button" onClick={() => {setOpenLogin(true); setOpenSignUp(false)}} className="spre1 pop-container-tabsd active" >log in</div>
				<div type="button" onClick={() => {setOpenSignUp(true); setOpenLogin(false)}} className="spre2 pop-container-tabsd" >Sign up</div>
				
			</div>

			<div class="pop-container-tabs_bot">
				<div class="tospre1 pop-container-tabsd_bot active">
					<form class="authajax" name="system_auth_form" target="_top" action="">

						<input type="text" placeholder="User name/email address" value={username} onChange={(e) => setName(e.target.value)} />
						<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

						<div class="blockremembr">
							<div class="blockremembr-l">
								<input type="checkbox" id="USER_REMEMBER_frm" name="USER_REMEMBER" value="Y" />
								<label for="USER_REMEMBER_frm" >Remember me?</label>
							</div>
							<div class="blockremembr-r"><a href="/forgot/">Forgot password?</a></div>

						</div>

						<input name="Login" type="submit" onClick={handleOnSubmitLogin}/>

					</form>
				</div>
			</div>
		</div>
		</Modal>
		<Modal style={{padding: 0}} open={openSignUp} onCancel={closeModalSignUp}  id="getmylogin" class="fancybox-content" footer={null}>
		<div class="pop-container aboutforms">
			<div class="pop-container-tabs">
				<div type="button" onClick={() => {setOpenLogin(true); setOpenSignUp(false)}} class="spre1 pop-container-tabsd">log in</div>
				<div type="button" onClick={() => {setOpenSignUp(true); setOpenLogin(false)}} class="spre2 pop-container-tabsd active">Sign up</div>
			</div>

			<div class="pop-container-tabs_bot">
				<div class="tospre1 pop-container-tabsd_bot active">
					<form class="authajax" name="system_auth_form" method="post" action="">
						<input type="text" placeholder="User name/email address" name="USER_LOGIN" value={username} onChange={(e) => setName(e.target.value)}/>
						<input type="password" placeholder="Password" name="USER_PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)}/>
						<input type="password" placeholder="Confirm password" name="pass2"/>
						<input name="SignUp" type="submit" onClick={handleOnSubmitSignUp} placeholder="" value="continue"/>
					</form>
				</div>
			</div>
		</div>
		</Modal>
	</div>
</div>
	  )
}
export default Main;