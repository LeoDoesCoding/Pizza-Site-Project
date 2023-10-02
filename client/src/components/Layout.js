import React from 'react'
import "../styles/main.css"
import Nav from "./Navbar"
import {Outlet} from 'react-router-dom'

function Layout() {
	return(
		<><><Nav/></>
		<div id="body">
			<div id="bodyContent">
				<Outlet />
			</div>
		</div></>
	)
}

export default Layout;