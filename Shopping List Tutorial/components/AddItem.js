import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const AddItem = ({onChange, addItem, value}) => {
  return (
    <View>
      <TextInput
        placeholder="Add Item..."
        style={styles.input}
        onChange={onChange}
        value={value}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(value)}>
        <Text style={styles.btnText}>
          <FontAwesomeIcon icon={faPlus} size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
