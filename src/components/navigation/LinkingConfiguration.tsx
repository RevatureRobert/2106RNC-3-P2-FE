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
           Login: {
             screens: {
               Login: 'login',
             },
           },
           PostFeed: {
             screens: {
               PostFeed: 'post-feed',
             },
           },
           AddPost: {
            screens: {
              PostFeed: 'post-feed',
            },
          },
          Profile: {
            screens: {
              PostFeed: 'post-feed',
            },
          },
         },
       },
       NotFound: '*',
     },
   },
 };
 