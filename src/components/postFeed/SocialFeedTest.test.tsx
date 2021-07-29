import React from 'react';
import PostFlatList from './postFlatList';
import renderer from 'react-test-renderer';
import { CognitoAccessToken } from 'amazon-cognito-identity-js';

const testData = [
    {post_id: 'JQWERY', username: 'Test User', post_text: 'I wanted to do a test so I entered test data into the test data constant in the test post file so that the text I typed would appear in the tested text test.'}
]

describe('<PostList />', () => {
    const list = renderer.create(<PostFlatList data={testData}/>)

    it('should display username correctly', () => {
        const jason = JSON.stringify(list.toJSON());
        const actual = JSON.parse(jason);

        expect(actual.children[0].props.data[0]).toHaveProperty('username', 'Test User');
    })
})