import {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {Container, Row, Col} from "reactstrap";
import {IUser} from "../../models/userModel";

const UserDataForm = (user: IUser) => {
    const [editable, toggleEditing] = useState(false);
    const [buttonText, setButtonText] = useState("Edit");
    // Passes user data in as an object.
    const [userData, setUserData] = useState(user);

    // Activated upon pressing the save/edit button
    const submitHandle = () => {
        toggleEditing(() => {
            return !editable;
        });
        if (!editable) {
            setButtonText("Save");
        } else {
            setButtonText("Edit");
            // Here's where you can properly save edited data
        }
    };

    // Called every time any field is changed
    const manageEdits = (e: any) => {
        const target = e.target;
        setUserData({
            ...userData,
            [target.name]: target.value
        });
    };

    return (
        <Container>
            <Form>
                <Row fluid="true">
                    <Col xs="2">
                        <Label for="email" style={{color: "#ccc"}}>
                            Profile Page
                        </Label>
                    </Col>
                    <Col>
                        <Input
                            id="email"
                            plaintext
                            value={userData.userName}
                            disabled
                        />
                    </Col>
                    <Col xs="1">
                        <Button onClick={submitHandle}>{buttonText}</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="name" style={{color: "#ccc"}}>
                            Name
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            name="FirstName"
                            placeholder="First"
                            value={userData.firstName}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                    <Col>
                        <Input
                            name="LastName"
                            placeholder="Last"
                            value={userData.lastName}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label style={{color: "#ccc"}}>Birthday</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="date"
                            name="BirthDate"
                            value={userData.birthDate}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label style={{color: "#ccc"}}>Phone Number</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            name="PhoneNumber"
                            value={userData.phoneNumber}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label style={{color: "#ccc"}}>Nickname</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            name="NickName"
                            value={userData.nickName}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label style={{color: "#ccc"}}>Preferred Name</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            name="PreferredName"
                            value={userData.publicName}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label style={{color: "#ccc"}}>Profile</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input
                            type="textarea"
                            name="Profile"
                            value={userData.profile}
                            onChange={manageEdits}
                            disabled={!editable}
                        />
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default UserDataForm;
