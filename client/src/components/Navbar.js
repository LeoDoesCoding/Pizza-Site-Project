import React from 'react'
import "../styles/nav.css"
import banner from "../images/banner.jpg"

function Nav() {
	return(
		<header>
			<div id="banner-container">
				<img id="banner-image" src={banner} alt="Banner image" /> {/* Use the imported image */}
				<div id="banner-text"><h1>Red Carpet Pizzas</h1></div>
			</div>
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/Menu">Menu</a></li>
					<li><a href="/services">Services</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav;