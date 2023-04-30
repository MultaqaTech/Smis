import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import Main from './Main';
import '../App.css';
const Lkabinet = () => {
	const { user } = useSelector((state) => state);
	const navigate = useNavigate();

	return (
		<div>
		{user.isLogin ? 
		<main>
			<div class="container">
				<div class="lk-lefttoright">
					<div class="lk-lefttoright-l">
						<div class="maxforms">
							<div class="lkblockedits">
								<form class="setting-table" method="post" name="form1" action="" enctype="multipart/form-data">
									<div class="heads-form">
										<div class="heads-form1">Profile settings</div>
										<div class="heads-form2"><img src="img/account_box.svg"/><span class="textfr">Edit</span><span class="editicon fellow"></span></div>
									</div>
									<div class="body-form">
										<div class="form-one-blocks">
											<div class="form-one-blocks1">Profile name</div>
											<div class="form-one-blocks2">
												<div class="form-one-blocks3">
													<input type="text" class="input" name="NAME" value=""   placeholder="First Name" />
													<span class="editicon"></span>
												</div>
												<div class="form-one-blocks3">
													<input   type="text" class="input"  name="LAST_NAME" value="" placeholder="Last Name"/>
													<span class="editicon"></span>
												</div>
											</div>
										</div>
										<div class="form-one-blocks">
											<div class="form-one-blocks1">email</div>
											<div class="form-one-blocks2">
												<div class="form-one-blocks3">
													<input type="text" class="input" name="EMAIL"  value=""/>
													<span class="editicon"></span>
												</div>														 
											</div>
										</div>
										<div class="form-one-blocks">
											<div class="form-one-blocks1">Password</div>
											<div class="form-one-blocks2">
												<div class="form-one-blocks3">
													<input type="password" class="input jsshowpass3" name="NEW_PASSWORD" placeholder="New password" />
													<span class="editicon"></span>
												</div>
												<div class="form-one-blocks3">
													<input class="input jsshowpass3"  type="password"  name="NEW_PASSWORD_CONFIRM"  autocomplete="off" placeholder="Confirm new password" />
													<span class="editicon"></span>
												</div>												 
											</div>
										</div>
										
										<div class="form-one-blocks">
											<div class="form-one-blocks1">Contact no.</div>
											<div class="form-one-blocks2">
												<div class="form-one-blocks3">
													<input type="text" class="input" name="UF_CONTNO" placeholder="Contact No." value="" />
													<span class="editicon"></span>
												</div>											 
											</div>
										</div>
										
										<div class="form-one-blocks">
											<div class="form-one-blocks1">language</div>
											<div class="form-one-blocks2">
												<div class="form-is-select">
													<select>
													<option  value=""></option>
													</select>
												</div>												
											</div>
										</div>
										
										<div class="form-one-blocks">
											<div class="form-one-blocks1">language</div>
											<div class="form-one-blocks2">
												<div class="form-is-select">
													<select>
													<option  value=""></option>
													</select>
												</div>
												
												<div class="form-is-select">
													<select>
													<option value=""></option>
													</select>
												</div>
												
												<div class="form-is-select">
													<select>
													<option value=""></option>
													</select>
												</div>											 
											</div>
										</div>
									</div>
									<div class="footer-form">
										<input type="submit" name="save" value="save" class="buttonsave"/>
									</div>
								</form>
							</div>
						</div>
					</div>

					<div class="lk-lefttoright-r">
						<ul class="lk-menu">
							<li><Link href="/lk" class="active">Profile setting</Link></li>
							<li><Link href="/lk/dashboard">Dashboard</Link></li>
							<li><Link href="/lk/notification">notification</Link></li>
						</ul>
					</div>
				</div>
				<div class="overpopsups">
					<div class="overpopsups-icon"></div>
					<div class="overpopsups-data">
						<div class="overpopsups-profile">
							<div class="overpopsups-profile-l"><img src="img/account_circle_head.svg" /></div>
							<div class="overpopsups-profile-r"></div>
						</div>
						<div class="menunospace">
							<a class="menupops" href="/">Home/News Feed</a>
							<a class="menupops" href="">Connections</a>
							<a class="menupops" href="">Email</a>
							<a class="menupops" href="/lk/">Settings</a>
						</div>
						<a class="menupops" href="/risk/">Create & Register H&R Assessment</a>
						<a class="menupops" href="/myrisk/">Review H&R Assessment</a>
						<a class="menupops" href="/dashboard/">Dashboard</a>
					</div>
				</div>
			</div>
		</main>
		: <Main />
	}
	</div>
		  )
}
export default Lkabinet;