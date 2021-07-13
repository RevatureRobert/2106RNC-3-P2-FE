import {Button, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import login from "../../LoginCognito";
import {useHistory} from "react-router-dom";
import {useState} from "react";

const PostForm: React.FC<{onPost: () => void}> = (props: any) => {
    const [postText, setPostText] = useState("");

    const history = useHistory();
    const routeChange = () => {
        let path = "/posts/added";
        history.push(path);
    };

    const postChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setPostText(value);
    };

    const fetchPosts = async () => {
        try {
            const x = String(await login.getUserName());
            console.log(x, postText);
            await axios.post("http://localhost:3001/api/home/post/addpost", {
                socialPosts: {
                    userName: x,
                    postText: postText
                }
            });
            routeChange();
            props.onPost();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <FormGroup className="mx-5">
                <Label for="postText">Post</Label>
                <Input
                    type="textarea"
                    className="textarea"
                    id="exampleText"
                    value={postText}
                    rows="5"
                    onChange={postChangeHandler}
                    placeholder="Write your post here..."
                />
            </FormGroup>
            <Button
                className="mx-5 mt-3 btn-secondary btn-lg"
                onClick={fetchPosts}>
                Post
            </Button>
        </div>
    );
};

export default PostForm;
