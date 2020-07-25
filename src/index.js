import React from 'react';
import ReactDOM from 'react-dom';
import { MainApp } from './Pages/MainApp';
import * as serviceWorker from './Index/serviceWorker';
const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');
ReactDOM.render(
  <React.StrictMode>
    <MainApp hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
