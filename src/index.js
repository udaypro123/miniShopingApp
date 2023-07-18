import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { mystore } from './components/reddux/store';
import ContextProvider from './components/contextApi/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={ mystore }>
        <ContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ContextProvider>
    </Provider>
);

