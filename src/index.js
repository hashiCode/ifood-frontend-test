import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {
    addLocaleData,
    IntlProvider,
} from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';
import localeData from './messages/messages';

addLocaleData([...pt, en]);
const language = navigator.language || 'en-US';
const message = localeData[language];

ReactDOM.render(<IntlProvider locale={language} messages={message}><App /></IntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
