import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native'

const PlaceDetail = ({ modalActive, selectedPlace, toggleModal, deletePlace }) => {
  const modalContent = !selectedPlace ? null : <View>
    <Image style={styles.placeImage} source={selectedPlace.image} />
    <Text style={styles.placeName}>{ selectedPlace.name }</Text>
  </View>

  return (
    <Modal
      onRequestClose={toggleModal}
      style={styles.placeDetail}
      animationType="slide"
      transparent={false}
      visible={modalActive}>
      <View>
        {modalContent}
        <View>
          <Button title='Delete' color='red' onPress={() => deletePlace(selectedPlace.key)} />
          <Button title='Close' onPress={toggleModal} />
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