import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Buttons';

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
    const body = item.post_text;
    const user = item.username;
    const date = new Date(item.post_date_time);


    switch (type) {
        case 'post':
            return (
                <View style={styles.container}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.user}>{user}</Text>
                            <Text style={styles.date}>{date.toDateString()}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <OptionalBody style={styles.body} body={body} numberOfLines={5}/>
                        </View>
                    {/* If going off my recommendations, herein would have to be another PostFlatList,
                         this time of type="comment" and data=[the relevant comments] */}

                         <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                             <Buttons />
                         </View>
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
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 5
    },
    user:{
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize:18,
        textAlign: 'left'
    },
    body: {
        width: 0,
        flexGrow: 1,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 10
    },
    date: {
        flexGrow: 1,
        flex: 1,
        alignSelf: 'flex-end',
        paddingLeft: 10,
        textAlign:'right'
    }
})


export default SinglePost;