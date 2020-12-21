import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderContainer from './components/Header/HeaderContainer';
import Music from './components/Music/Music';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
 
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <div className="myheader">
      <HeaderContainer  />
      </div>
     
      <Navbar />

      <div className="app_wrapper_content">
       
        <Route path = '/dialogs' render ={ () => <Dialogs dialogsInfo = {props.state.dialogsInfo} dispatch = {props.dispatch}  />}/>
        <Route path = '/profile/:userId?' render ={ () => <ProfileContainer />}/>
        <Route path = '/news' component={News} />
        <Route path = '/music' component={Music} />
        <Route path = '/users' component={UsersContainer} />
        <Route path = '/settings' component={Settings} />

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
