import React from 'react';
import {View, Text} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {CostStyle} = Style;

function CostDetailPages() {
  const JokesReducer = useSelector(state => state.JokesReducer);
  return (
    <View
      style={
        JokesReducer.data.id % 2 === 1
          ? CostStyle.containerNormal
          : CostStyle.containerNotNormal
      }>
      <Text style={[CostStyle.judulTXT, {alignSelf: 'center'}]}>
        {JokesReducer.data.category}
      </Text>
      {JokesReducer.data.type === 'single' ? (
        <Text style={CostStyle.judulTXT}>Jokes : {JokesReducer.data.joke}</Text>
      ) : (
        <View>
          <Text style={CostStyle.judulTXT}>
            Setup : {JokesReducer.data.setup}
          </Text>
          <Text style={CostStyle.judulTXT}>
            Delivery : {JokesReducer.data.delivery}
          </Text>
        </View>
      )}
    </View>
  );
}

export default CostDetailPages;
