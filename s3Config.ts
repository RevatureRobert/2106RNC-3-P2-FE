export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		REGION: 'us-east-1',
		BUCKET: 'amplify-upload-file-uploaded-s3-bucket',
        IDENTITY_POOL_ID: 'us-east-1:5fcfe28a-6bab-4c45-8f84-9955631e3608'
	},
    cognito: {
		REGION: 'us-east-1',
        USER_POOL_ID: 'us-east-1_L3ji90e5n',
        APP_CLIENT_ID: "5rii0m1j3b1dth4d32of19vdjg"
	}
}