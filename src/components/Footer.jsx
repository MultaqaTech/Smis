import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { Navbar } from 'react-bootstrap';
import '../App.css';
class Footer extends Component {
  render() {
    return (
		<footer>
			<div class="container">
			<div class="footsign">@ 2022 Sims solutions - All rights reserved </div>
			</div>
		</footer>
    )
  }
}

export default Footer