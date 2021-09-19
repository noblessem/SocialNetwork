import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.scss'
import Message from './Message/Message'




const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(d=>{

		return(<DialogItem key={d.id} name={d.name} id={d.id} img = {d.img}/>)
	})
	let messagesElement = props.state.messages.map(m=>{
	
		return <Message key={m.id} message = {m.message} id ={m.id} author={m.author}/>
	})

	return (
		<div className={s.dialogs} >
			<div className={s.dialogs__items}>
				{dialogsElements}

			</div>
			<div className={s.messages}>
				{messagesElement}
			</div>
		</div>
	)
}
export default Dialogs;