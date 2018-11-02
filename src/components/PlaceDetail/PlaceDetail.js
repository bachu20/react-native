import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = ({ place, deletePlace, unselectPlace }) => {
  const modalContent = !place ? null : <View>
    <Image style={styles.placeImage} source={place.image} />
    <Text style={styles.placeName}>{ place.name }</Text>
  </View>

  return (
    <Modal
      onRequestClose={unselectPlace}
      style={styles.placeDetail}
      animationType="slide"
      transparent={false}
      visible={!!place}>
      <View>
        {modalContent}
        <View>
          <Button title='Delete' color='red' onPress={() => deletePlace(place.key)} />
          <Button title='Close' onPress={unselectPlace} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  placeImage: {
    width: '100%',
    height: 350
  },
  placeName: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
})

export default PlaceDetail