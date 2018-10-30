import React from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

const ListItem = props => (
  <TouchableOpacity onPress={props.selectPlace} style={styles.listContainer}>
    <View style={styles.listItem}>
      <Image
        resize='contain'
        style={styles.placeImage}
        source={props.placeImage}
      />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#eee',
    marginBottom: 10
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 20,
    height: 35,
    width: 35
  }
})

export default ListItem