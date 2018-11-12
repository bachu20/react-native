import React from 'react'
import {Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { likePlace } from '../../store/actions/places';

const PlaceDetail = ({ place, deletePlace, unselectPlace, likePlace, dislikePlace }) => {
  const modalContent = !place ? null : <View>
    <Image style={styles.placeImage} source={place.image} />
    <Text style={styles.placeName}>{ place.name }</Text>
  </View>

  const actionButtons = <View style={styles.actionContainer}>
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.actionButton} onPress={() => deletePlace(place.key)}>
        <Icon size={30} name='md-trash' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => dislikePlace(place.key)}>
        <Icon size={30} name='md-sad' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => likePlace(place.key)}>
        <Icon size={30} name='md-happy' />
      </TouchableOpacity>
    </View>
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
        {actionButtons}
        <Button title='Close' onPress={unselectPlace} />
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
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  },
  actionContainer: {
    alignItems: 'center'
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  actionButton: {
    margin: 10,
    color: '#fff'
  }
})

export default PlaceDetail