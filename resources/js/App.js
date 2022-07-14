import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import PageSwitch from "./pages/PageSwitch";
import store, {persistor} from "./store";
import 'tippy.js/dist/tippy.css';

function App() {
    return (
        <BrowserRouter>
            <PageSwitch/>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>,
        document.getElementById('app')
    );
}
