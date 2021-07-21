/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

 import * as Linking from 'expo-linking';

 export default {
   prefixes: [Linking.makeUrl('/')],
   config: {
     screens: {
       Root: {
         screens: {
          Landing: {
            screens: {
              Landing: 'landing',
            },
          },
           PostFeed: {
             screens: {
               PostFeed: 'post-feed',
             },
           },
          Profile: {
            screens: {
              Profile: 'profile',
            },
          },
          Logout: {
            screens: {
              Logout: 'logout',
            },
          },
         },
       },
       NotFound: '*',
       Login: 'login',
       Register: 'register'
     },
   },
 };
 