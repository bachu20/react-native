import React from 'react'
import {FlatList, StyleSheet} from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlaceList = ({ places, selectPlace }) => <FlatList
  style={styles.placeList}
  data={places}
  renderItem={({ item }) => <ListItem
    key={item.key}
    placeName={item.name}
    placeImage={item.image}
    selectPlace={() => selectPlace(item.key)}
  />}
/>

const styles = StyleSheet.create({
  placeList: {
    width: '100%'
  }
})

export default PlaceList