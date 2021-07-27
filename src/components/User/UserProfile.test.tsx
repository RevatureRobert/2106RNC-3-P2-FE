// import {describe} from "@jest/globals";
import React from 'react';
import ProfileScreen from "../../screens/Profile";
import renderer from 'react-test-renderer';

const testUser = {
    userName: "Jimothy@nomod.net",
    password: "passward",
    firstName: "Jimmy",
    lastName: "Malone",
    birthDate: "01/01/1900",
    phoneNumber: "(123)123-4567",
    nickName: "Jimothy",
    publicName: "James",
    profile: "This is James here, call me Jimothy."
};

describe("Profile Screen", () => {
    const profile = renderer.create(<ProfileScreen data={testUser} />).root;
    it('should display first name properly', () => {
        expect(profile.findByProps({placeholder: 'First Name'}).props.value).toEqual('Jimmy');
    })
});
