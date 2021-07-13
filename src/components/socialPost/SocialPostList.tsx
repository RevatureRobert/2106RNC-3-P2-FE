import React, {useState, useEffect, useCallback, useMemo} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setPost} from "../../redux/actions/socialPostActions";
import SocialPostComponent from "./SocialPost";
import {RootState} from "../../redux/reducers";
import {Col, Row} from "reactstrap";
import PostForm from "./PostForm";

function useForceUpdate(): () => void {
    const [value, setValue] = useState(0);

    return () => setValue((value) => value + 1);
}

const SocialPostPage: React.FC = () => {
    const useForceUpdateCall = useForceUpdate();
    const posts = useSelector((state: RootState) => state.allPosts.posts);
    const dispatch = useDispatch();
    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3001/api/home/post/getall"
            );
            dispatch(setPost(response.data.posts.Items));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);
    console.log(posts);
    return (
        <div className="row">
            <div className="col-12 pt-3 justify-content-center">
                <PostForm onPost={useForceUpdateCall} />
            </div>
            <div className="col-12 px-5 py-5">
                <SocialPostComponent />
            </div>
        </div>
    );
};

export default SocialPostPage;
