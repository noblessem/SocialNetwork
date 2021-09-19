import React from "react";
import s from './Header.module.scss'

const Header =()=>{

	return(
		<header className= {s.header} >
				<img className={s.header__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/647px-Apple_logo_black.svg.png" alt="logo"></img>
		</header>
	)
}

export default Header;