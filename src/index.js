import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './components/Redux/state';






export let toRend =   (state) => {
    debugger
  return ReactDOM.render(
  <React.StrictMode>  
    <App  state = {state} addPost = {store.addPost.bind(store)} makeNewM = {store.makeNewM.bind(store)} sendMessage = {store.sendMessage.bind(store)} />
  </React.StrictMode>,
  document.getElementById('root')
);
}


 toRend(store.getState())

store.callToRend(toRend)




 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();