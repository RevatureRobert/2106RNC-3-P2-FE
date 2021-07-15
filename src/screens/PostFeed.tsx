import * as React from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const data = [
  {
    id: 'test-id1',
    title: 'Post 1',
  },
  {
    id: 'test-id2',
    title: 'Post 2',
  },
  {
    id: 'test-id3',
    title: 'Post 3',
  },
  {
    id: 'test-id4',
    title: 'Post 4',
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function PostFeedScreen() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  )

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/logo.png")}
      />
      <Text style={styles.title}>What's new?</Text>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    padding: 20
},
});
