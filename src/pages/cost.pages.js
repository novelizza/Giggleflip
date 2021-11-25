import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {CostStyle} = Style;

function CostPages() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    age: '',
    weight: '',
    height: '',
  });

  async function fetchData() {
    await axios
      .get('https://v2.jokeapi.dev/joke/Any')
      .then(res => {
        console.log(res.data);
        dispatch({
          type: 'FILL_JOKES',
          inputValue: res.data,
        });
        navigation.navigate('CostDetailPage');
      })
      .catch(e => Alert.alert('Gagal!', e));
  }

  return (
    <View style={CostStyle.container}>
      <View style={CostStyle.headerContainer}>
        <Text
          style={[
            CostStyle.judulTXT,
            {marginTop: 20, alignSelf: 'center', color: '#fff'},
          ]}>
          Cari Jokes Lucu!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          fetchData();
        }}
        style={CostStyle.touchableContainer}>
        <Text style={CostStyle.touchableTXT}>Cari</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CostPages;
