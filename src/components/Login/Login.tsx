import React, {FormEvent, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {RootStore} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {
    CognitoUser,
    AuthenticationDetails,
    CognitoUserPool
} from "amazon-cognito-identity-js";
import Carousel from "../carousel";
import "./Login.css";
import LoginCognito from "../../LoginCognito";

const poolData = {
    UserPoolId: "us-east-2_UW3QxKzWj",
    ClientId: "bis6ou4bf4k7i548libkei128"
};

const userPool = new CognitoUserPool(poolData);

const LoginComponent: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const dispatch = useDispatch();
    const {error} = useSelector((state: RootStore) => state.login);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch("");
            }
        };
    }, [error, dispatch]);

    const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        //get rid of whitespaces
        const value = e.target.value.trim();
        setUsername(value);
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    };

    const history = useHistory();

    const routeChange = () => {
        let path = "/posts";
        history.push(path);
    };

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        console.log(username, password);
        LoginCognito.login(username, password, false)
            .then((signUpResult: CognitoUser) => {
                // Signup complete, redirect to somewhere
                routeChange();
            })
            .catch(console.error);
        /*setLoading(true);
        await dispatch(login({ username, password }, () => {setLoading(false)}));
        window.location.reload();*/
    };

    return (
        <div className="login row bg-dark">
            <div className="col-6 ps-5 mt-5 mb-5">
                <Carousel />
            </div>
            <div className="col-6 justify-content-end mb-5 ps-5 text-light">
                <form className="text-center" onSubmit={submitHandler}>
                    <div className="form-group mb-3">
                        <br />
                        <br />
                        <h1>Login</h1>
                        <br />
                        <label htmlFor="username" className="form-label">
                            <h5>Username</h5>
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                autoComplete="username"
                                value={username}
                                onChange={usernameChangeHandler}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">
                            <h5>Password</h5>
                            <div className="row g-3">
                                <div className="col-11">
                                    <input
                                        className="form-control"
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        id="password"
                                        autoComplete="current-password"
                                        aria-describedby="eye"
                                        onChange={passwordChangeHandler}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className="col-1">
                                    {isPasswordVisible ? (
                                        <i
                                            className="bi bi-eye-fill"
                                            id="eye"
                                            onClick={() =>
                                                setPasswordVisible(false)
                                            }></i>
                                    ) : (
                                        <i
                                            className="bi bi-eye-slash"
                                            id="eye-slash"
                                            onClick={() =>
                                                setPasswordVisible(true)
                                            }></i>
                                    )}
                                </div>
                            </div>
                        </label>
                    </div>
                    <br />
                    <div className="form-group">
                        <button
                            className="btn btn-lg btn-outline-secondary"
                            type="submit">
                            Login
                        </button>
                    </div>
                    <br />
                    <a href="/signup" className="link-light">
                        I don't have an account
                    </a>
                </form>
                <br />
                <p className="bg-dark text-muted text-center">
                    &copy; Copyright {new Date().getFullYear()} Social Justice
                    Warriors
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;
