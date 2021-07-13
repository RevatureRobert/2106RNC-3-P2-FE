import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.json";
import Amplify from "aws-amplify";
import Authenticate from "./components/Login/Authenticate.json";

//To use Cognito, configure Amplify
Amplify.configure({
    Authenticate: {
        mandatorySignId: true,
        region: Authenticate.REGION,
        userPoolId: Authenticate.USER_POOL_ID,
        clientId: Authenticate.CLIENT_ID
    }
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
