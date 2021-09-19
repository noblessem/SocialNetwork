import react from "react";
import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";



const MyPosts = (props) => {
	
	let postElement = props.post.map((p, i) => {
	
		return <Post key={p.id} message={p.message} likes={p.likes} id={p.id} />
	})

	let newPostElement = react.createRef();

	let addPost = () =>{
			
			let text = newPostElement.current.value;
			alert(text)
	}
	return (
		<div className={s.content__posts}>
			My posts
			<div className={s.new__post}>
				<textarea ref={newPostElement}></textarea>
				<button onClick= { addPost}>Add post</button>
			</div>
			<div className={s.posts}>
				{postElement}
			</div>


		</div>
	)
}

export default MyPosts;

