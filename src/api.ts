import axios from "axios";
//import { logoutStart } from './redux/actions/logRegAction';
import {store} from "./redux/store";
import {IRegister} from "./redux/types/types";

const url = "http://localhost:3000";
axios.defaults.withCredentials = true;

let isLogoutClicked = false;

const resetIsLogoutClicked = () => {
    isLogoutClicked = false;
};

axios.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        const {data, status} = error.response;
        if (
            status === 401 &&
            (data?.error?.type || "") !== "INCORRECT_CRED" &&
            error.config
        ) {
            if (!isLogoutClicked) {
                isLogoutClicked = true;
                store.dispatch(logoutStart(resetIsLogoutClicked));
            }
        }
        return Promise.reject(error);
    }
);

export const login = async (username: string, password: string) => {
    try {
        const req = await axios.post("/login", {
            username,
            password
        });

        return Promise.resolve(req.data);
    } catch (err) {
        return Promise.reject(err?.response?.data || {});
    }
};

export const checkAuthSess = async () => {
    try {
        const req = await axios.get("/check");

        return Promise.resolve(req.data);
    } catch (err) {
        return Promise.reject(err?.response?.data || {});
    }
};

export const register = async ({
    username,
    password,
    nickname,
    first_name,
    last_name
}: IRegister) => {
    try {
        const req = await axios.post("/register", {
            username,
            password,
            nickname,
            first_name,
            last_name
        });

        return Promise.resolve(req.data);
    } catch (err) {
        return Promise.reject(err?.response?.data || {});
    }
};
