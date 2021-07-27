import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OptionalBody = (props: any) => {
    let body = props.body;
    if (body) {
        return (<Text {...props}>{body}</Text>);
    } else {
        return null;
    }
}

const PostSwitch = (props: any) => {
    const type = props.type;
    const item = props.item;
    const body = item.body;
    const user = item.user;


    switch (type) {
        case 'post':
            return (
                <View>
                    <Text style={props.style}>User: {user} {"\n"}{"\n"}
                    <OptionalBody style={props.style} body={body}/>
                    </Text>
                    {/* If going off my recommendations, herein would have to be another PostFlatList,
                         this time of type="comment" and data=[the relevant comments] */}
                </View>
            );
        case 'comment':
            return (
                <View>
                    <Text>User: {user}</Text>
                    <OptionalBody body={body}/>
                </View>
            );
        default:
            return(
                <View>
                    <Text>Error: invalid type received. Contact someone and panic. @ the call for SinglePost; type {type} is not valid.</Text>
                </View>
            );
    }
}

const SinglePost = (props: any) => {
    const item = props.item;
    const type = props.type;

    return (<PostSwitch item={item} type={type} style={props.style}/>);
}

export default SinglePost;