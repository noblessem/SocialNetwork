import React from 'react';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';


const App = (props) => {

	return (
			<div className="app-wrapper">
				<Header />
				<NavBar state={props.state.sidebar} />
	

				<div className="app-wrapper-content">

					<Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />}/>
					<Route path="/profile" render={() => <Profile state={props.state.profilePage}/>}/>
					<Route path="/news" render={()=><News pas="1111"/>} />
					<Route path="/music" render={()=><Music/>} />
					{/* <Route path="/settings" component={Settings} /> */}
					<Route path="/settings"><Settings/></Route>

				</div>
			</div>
	
	)
}

export default App;
