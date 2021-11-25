import React from 'react';
import {View, Text, Image} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {HomeStyle} = Style;

function HomeDetailPages() {
  const MemeReducer = useSelector(state => state.MemeReducer);
  const [dataWidth, setDataWidth] = React.useState(
    parseInt(MemeReducer.data.width),
  );
  const [dataHeight, setDataHeight] = React.useState(
    parseInt(MemeReducer.data.height),
  );

  React.useEffect(() => {
    if (dataWidth > 1000 || dataHeight > 1000) {
      setDataWidth(dataWidth - 500);
      setDataHeight(dataHeight - 500);
    }
  }, [dataHeight, dataWidth]);

  return (
    <View style={HomeStyle.container}>
      <View>
        <Image
          source={{uri: MemeReducer.data.url}}
          style={{
            width: (dataWidth * 45) / 100,
            height: (dataHeight * 45) / 100,
            alignSelf: 'center',
          }}
        />
        <Text style={HomeStyle.itemListTXT}>
          {'Judul : ' + MemeReducer.data.name}
        </Text>
        <View style={HomeStyle.blank} />
      </View>
    </View>
  );
}

export default HomeDetailPages;
