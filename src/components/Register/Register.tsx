import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    CognitoUser,
    AuthenticationDetails,
    CognitoUserPool,
    ISignUpResult
} from "amazon-cognito-identity-js";
import {CreateUser, signup} from "../../redux/actions/logRegAction";
import axios from "../../../axiosConfig";
import Carousel from "../carousel";
import {RootStore} from "../../redux/store";
import Login from "../../LoginCognito";

const poolData = {
    UserPoolId: "us-east-2_UW3QxKzWj",
    ClientId: "bis6ou4bf4k7i548libkei128"
};

const userPool = new CognitoUserPool(poolData);

const Register = (): any => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");
    const [birthday, setBirthday] = useState("");
    const [phone, setPhone] = useState("");
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
        const value = e.target.value.trim();
        setUsername(value);
    };

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
    };

    const firstChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFirst(value);
    };

    const lastChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLast(value);
    };

    const bdayChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBirthday(value);
    };

    const phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhone(value);
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = username.split("@")[0];
        console.log(name);
        console.log(password, username);
        Login.createAccount(
            name,
            password,
            username,
            first_name,
            last_name,
            birthday,
            phone,
            name,
            name,
            "Default profile."
        )
            .then((signUpResult: ISignUpResult) => {
                // Signup complete, redirect to somewhere
            })
            .catch(console.error);
        /*setLoading(true);
        await dispatch(signup({ username, password, first_name, last_name, birthday, phone }, () => setLoading(false)))
        await dispatch(CreateUser({
            "username": username,
            "password": password,
            "first_name": first_name,
            "last_name": last_name,
            "birthday": birthday,
            "phone": phone,
        }));

        if(loading === false) {
            window.location.reload();
            window.location.href = "/";
        }*/
    };

    return (
        <div className="row bg-dark">
            <div className="col-6 ps-5 mt-5 mb-5">
                <Carousel />
            </div>
            <div className="col-6 pt-5 text-light">
                <form className="text-center" onSubmit={submitHandler}>
                    <div className="form-group mb-2">
                        <h1>Register</h1>
                        <br />
                        <div className="row g-3 justify-content-center">
                            <div className="col-5">
                                <label
                                    htmlFor="first_name"
                                    className="form-label">
                                    <h6>First Name</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="first_name"
                                        value={first_name}
                                        onChange={firstChangeHandler}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col-5">
                                <label
                                    htmlFor="last_name"
                                    className="form-label">
                                    <h6>Last Name</h6>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="last_name"
                                        value={last_name}
                                        onChange={lastChangeHandler}
                                        required
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="birthday" className="form-label">
                            <h6>Birthday</h6>
                            <input
                                className="form-control"
                                type="date"
                                id="birthday"
                                min="1900-01-01"
                                max={Date.now()}
                                placeholder="mm-dd-yy"
                                value={birthday}
                                onChange={bdayChangeHandler}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="phone" className="form-label">
                            <h6>Phone #</h6>
                            <input
                                className="form-control"
                                type="phone"
                                id="phone"
                                value={phone}
                                placeholder="1-123-456-7890"
                                onChange={phoneChangeHandler}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group mb-2">
                        <label htmlFor="username" className="form-label">
                            <h6>Email</h6>
                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                value={username}
                                onChange={usernameChangeHandler}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password" className="form-label">
                            <h6>Password</h6>
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
                            Submit
                        </button>
                    </div>
                    <br />
                    <a href="/login" className="link-light">
                        I have an account
                    </a>
                </form>
                <br />
                <p className="bg-dark text-muted text-center ">
                    &copy; Copyright 2021 Social Justice Warriors
                </p>
            </div>
        </div>
    );
};

export default Register;
