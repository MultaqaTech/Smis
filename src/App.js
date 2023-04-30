import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import NavBar  from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Gettoknow from './pages/Gettoknow'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Contractors from './pages/Contractors'
import Main from './pages/Main'
import Lkabinet from './pages/Lkabinet'
import store from './store.js';
import './App.css';

function App() {
  return (
	<div class="oversite">
		<Provider store={store}>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/about" exact element={<About/>} />
					<Route path="/gettoknow" exact element={<Gettoknow/>} />
					<Route path="/contractors" exact element={<Contractors/>} />
					<Route path="/solutions" exact element={<Solutions/>} />
					<Route path="/contacts" exact element={<Contact/>} />
					<Route path="/" exact element={<Main/>} />
					<Route path="/login" exact element={<Main/>} />
					<Route path="/lk" exact element={<Lkabinet/>} />
				</Routes>
			</Router>
			<Footer/>
		</Provider>
	</div>

  )
}
export default App;
