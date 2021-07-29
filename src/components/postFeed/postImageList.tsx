import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	Dimensions,
	FlatList,
	TouchableOpacity
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Amplify from '@aws-amplify/core'
import Storage from '@aws-amplify/storage'
import config from '../../../s3Config'

Amplify.configure({
	Storage: {
		region: config.s3.REGION,
		bucket: config.s3.BUCKET,
		identityPoolId: config.cognito.IDENTITY_POOL_ID
	}
});