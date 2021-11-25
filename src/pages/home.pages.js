import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {faSmileWink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {HomeStyle} = Style;

function HomePages() {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://api.imgflip.com/get_memes')
        .then(res => {
          console.log(res.data.data.memes);
          setData(res.data.data.memes);
        })
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  const ListItemJokes = dataPassing => {
    return (
      <TouchableOpacity
        style={
          dataPassing.index % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        onPress={() => {
          dispatch({
            type: 'FILL_DATAMEME',
            inputValue: dataPassing.data,
          });
          navigation.navigate('HomeDetailPage');
        }}>
        <View>
          <FontAwesomeIcon icon={faSmileWink} size={20} color="#fff" />
        </View>
        <Text style={HomeStyle.itemListTXT}>{dataPassing.data.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={[HomeStyle.headerContainer]}>
        <Text
          style={[
            HomeStyle.judulTXT,
            {marginTop: 20, alignSelf: 'center', color: '#fff'},
          ]}>
          KUMPULAN MENTAHAN MEME
        </Text>
      </View>
      <ScrollView>
        {data.map((item, i) => {
          return <ListItemJokes key={i} data={item} index={i} />;
        })}
      </ScrollView>
    </View>
  );
}

export default HomePages;
