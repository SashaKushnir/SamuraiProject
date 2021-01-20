import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/NavBar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {initialization} from './components/Redux/appReducer'
import { connect } from 'react-redux';
import loader from './images/VAyR.gif'
import { getIsInitializedSel } from './components/Redux/selectors/selectors';
import Profile from './components/Profile/Profile';
class App extends React.Component {

  componentDidMount = () => {
    this.props.initialization()
  }

  render() {
    
    if (!this.props.isInitialized){
      
      return (
        <div>
          <img src = {loader}/>
        </div>
        )
    }
    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <div className="myheader">
            <HeaderContainer />
          </div>

          <Navbar />

          <div className="app_wrapper_content">

            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <Profile />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/settings' component={Settings} />
            <Route path='/login' render={() => <Login />} />

          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mstp = (state) => {
  return {
    isInitialized : getIsInitializedSel(state)
  }
}

export default connect (mstp , {initialization})(App);


