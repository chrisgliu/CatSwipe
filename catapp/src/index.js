import React from 'react';
import ReactDOM from 'react-dom';
//import App from './app/index';
import Swiper from './react-deck-swiper/App';
import * as serviceWorker from './serviceWorker';
import CardData from './data';

const rootElement = document.getElementById("root");
ReactDOM.render(<Swiper Cards={CardData} />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



