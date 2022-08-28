import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "./store";
import PageRoutes from "./pages/PageRoutes";
import ModalRoutes from "./modals/ModalRoutes";
import 'tippy.js/dist/tippy.css';

function App() {
    return (
        <BrowserRouter>
            <ModalRoutes/>
            <PageRoutes/>
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
