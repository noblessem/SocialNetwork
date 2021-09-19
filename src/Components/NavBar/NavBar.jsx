import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.scss'

const NavBar=(props)=>{
	let friends = props.state.friends.map((f)=>{
		console.log(f.img)
		return (<li className={s.friends__item}>
			<div className={s.img__container}>
				<img src={f.img} alt="Avatar" />
				
			</div>
			<span className={s.username + ' user'+f.id}>{f.name}</span>
		</li>)
	})
	return (
		<nav className={s.nav}>
				<ul className={s.nav__list}>
					<li className={s.item}>
						<NavLink to="/profile" className={s.nav__link} activeClassName={s.activeLink}>Profile</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/dialogs" className={s.nav__link} activeClassName={s.activeLink}>Messages</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/news" className={s.nav__link} activeClassName={s.activeLink}>News</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/music"className={s.nav__link} activeClassName={s.activeLink}>Music</NavLink>
					</li>
					<li className={s.item}>
						<NavLink to="/settings" className={s.nav__link} activeClassName={s.activeLink}>Settings</NavLink>
					</li>
				</ul>

				<ul className={s.friends__list}>
					{friends}
				</ul>
		</nav>
	)
}

export default NavBar;