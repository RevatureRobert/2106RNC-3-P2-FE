import {CognitoUser, ISignUpResult} from "amazon-cognito-identity-js";
import Login from "./LoginCognito";

test("Create a user account.", () => {
    const result: Promise<ISignUpResult> = Login.createAccount(
        "testuser",
        "SQOg6!egAu7$vtKnr$@0",
        "test@example.com",
        "Bob",
        "Smith",
        "01-01-1111",
        "+1111111111",
        "boberts",
        "boberts",
        "This is a sample profile."
    );

    expect(result).resolves.toBeTruthy();
    expect(result).rejects.toBeFalsy();
});

test("Login to a user account.", () => {
    const result: Promise<CognitoUser> = Login.login(
        "testuser",
        "SQOg6!egAu7$vtKnr$@0",
        false
    );

    //expect().resolves.toBeTruthy();
});

/*test("Remove the test user account.", () => {

    expect(Login.deleteUser()).resolves.toBeTruthy();

});
*/
