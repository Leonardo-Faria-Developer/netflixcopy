import React from "react";
import "./Header.css";

export default ({black}) => {

	return (

 
			<header className = {black ? "black": ""}>

				<div className = "header-logo">

					<img src = "https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=53" alt = "Netflix"/>
				</div>

				<div className = "header-user">

					<img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt = "User-1"/>
				</div>

			</header>


		);




}