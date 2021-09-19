import React from "react";
import s from './Post.module.scss'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://cdnb.artstation.com/p/assets/images/images/015/118/685/large/fredlobo-lopez-mrbean.jpg?1547126874" alt="Mr. Bin" className={s.image} />
			{props.message}
			<div>
				<span> {props.likes} likes</span>
		
			</div>

		</div>

	)
}

export default Post;
