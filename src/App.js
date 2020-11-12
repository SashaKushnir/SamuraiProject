import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app_wrapper">
      <Header />
      <Navbar />

      <div className="app_wrapper_content">
        <Route path = '/dialogs' render ={ () => <Dialogs dialogsInfo = {props.state.dialogsInfo} sendMessage = {props.sendMessage}/>}/>
        <Route path = '/profile' render = { () => <Profile profileInfo = {props.state.profileInfo} addPost = {props.addPost} makeNewM = {props.makeNewM}/>}/>
        <Route path = '/news' component={News} />
        <Route path = '/music' component={Music} />
        <Route path = '/settings' component={Settings} />

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
