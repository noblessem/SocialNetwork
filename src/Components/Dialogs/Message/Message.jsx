import s from './Message.module.scss';


const Message = (props) => {
	return (
		
			<div className={`${s.message} ${props.author?s.messageYour:s.messageCompanion}`}>
				
				<span>
				{props.message}
				</span>
			

		</div>

	)
}

export default Message;