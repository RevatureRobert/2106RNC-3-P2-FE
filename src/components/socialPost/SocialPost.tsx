import React from "react";
import {useSelector} from "react-redux";
import {Card, CardBody, CardTitle, CardText, Row, Col} from "reactstrap";
import {RootState} from "../../redux/reducers";

const SocialPostComponent: React.FC = () => {
    const posts = useSelector((state: RootState) => state.allPosts.posts);
    const renderList = posts.map(
        (post: {
            username: string;
            post_text: string;
            post_id: string;
            parent_post_id: string;
            post_date_time: string;
            main_post: number;
            like: boolean;
            dislikes: boolean;
        }) => {
            const {
                username,
                post_text,
                post_id,
                parent_post_id,
                post_date_time,
                main_post,
                like,
                dislikes
            } = post;

            return (
                <div>
                    <Row>
                        <Col sm="auto" md={{size: 12, offset: 0}}>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">{username}</CardTitle>
                                    <CardText></CardText>
                                    <CardText>{post_text}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            );
        }
    );
    return <>{renderList}</>;
};

export default SocialPostComponent;
