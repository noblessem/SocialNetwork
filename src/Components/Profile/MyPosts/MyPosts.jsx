import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";



const MyPosts = (props) => {
	
	let postElement = props.post.map((p, i) => {
	
		return <Post key={p.id} message={p.message} likes={p.likes} id={p.id} />
	})

	return (
		<div className={s.content__posts}>
			My posts
			<div className={s.new__post}>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={s.posts}>
				{postElement}
			</div>


		</div>
	)
}

export default MyPosts;

