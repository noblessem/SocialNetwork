import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.scss'

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog__item }>
			<div className={s.image__container }>
			<img src={props.img} alt="Ava" />

			</div>
			<NavLink to={path}  className={s.dialog__link} activeClassName={s.activeLink}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;