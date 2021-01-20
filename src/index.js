import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './components/Redux/reduxStore';
import { Provider } from 'react-redux';






export let toRend = () => {
  
  return ReactDOM.render(
    <Provider store = {store}>
  <React.StrictMode>  
    <App  state = {store.getState()} dispatch = {store.dispatch.bind(store)} />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
}

window.store = store


 toRend()

store.subscribe(toRend)




 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();