import '@styles/styles.scss';
import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';

import {App} from '@components/app/app';

ReactDom.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);
