import "./App.css";
import {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {PublicRoute, Protected} from "./routers/index";
import {useDispatch} from "react-redux";
import {checkAuthSess} from "./api";
import {loginSuccess} from "./redux/actions/logRegAction";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Navbar from "./components/Navigation/Navigation";
import SocialPostList from "./components/socialPost/SocialPostList";
//import SocialPostAdd from './components/SocialPost/SocialPostAdd'; <Route path={'/posts/added'} component={SocialPostAdd} />

function App() {
    return (
        <main className="bg-dark">
            <Navbar />
            <Switch>
                <Route path="/signup" component={Register} />
                <Route path="/login" component={Login} />
                <Route
                    path="/"
                    exact
                    render={(props: any) => (
                        <Login key={Date.now()} {...props} />
                    )}
                />
                <Route path={"/posts"} component={SocialPostList} />
            </Switch>
        </main>
    );
}

export default App;
