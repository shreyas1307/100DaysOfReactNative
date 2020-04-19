import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import uuid from 'uuid-random';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    {id: uuid(), title: 'Milk'},
    {id: uuid(), title: 'Bread'},
    {id: uuid(), title: 'Cereal'},
    {id: uuid(), title: 'Corys OG Kush Mix'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const onChange = value => {
    setText(value);
  };

  const addItem = item => {
    if (item === '') {
      Alert.alert('Error', 'Please enter a valid Item Name', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: uuid(), title: item}, ...prevItems];
      });
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem onChange={onChange} value={text} addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World!</Text>
//       <Image
//         source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
//         style={styles.img}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'darkslateblue',
//     fontSize: 30,
//   },
//   img: {
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//   },
// });
