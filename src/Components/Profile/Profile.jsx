import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	
	return (
		<div className={s.content}>

			<ProfileInfo />
			<MyPosts post={props.state.post}/>
		</div>
	)
}

export default Profile;

