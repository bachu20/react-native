import React, { Component } from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default class PlaceInput extends Component {
  state = { placeName: "" }

  placeInputHandler = e => this.setState({ placeName: e })
  savePlaceHandler = () => {
    const { placeName } = this.state

    if (placeName.trim() === "") return

    this.setState({ placeName: '' })
    this.props.addPlace(placeName)
  }

  render() {
    return <View style={styles.placeContainer}>
      <TextInput
        placeholder="Places you'd love to go?"
        style={styles.placeInput}
        value={this.state.placeName}
        onChangeText={this.placeInputHandler}
      />
      <Button
        title="Save"
        style={styles.saveButton}
        onPress={this.savePlaceHandler}
      />
    </View>
  }
}

const styles = StyleSheet.create({
  placeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  placeInput: {
    width: '70%',
  },
  saveButton: {
    width: '30%',
  },
})