/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, View} from 'react-native';
import _ from 'lodash'
import faker from 'faker'

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import StockPlaceImage from './src/assets/images/clouded-cityscape.jpeg'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const seed = (max = 12) => _.reduce([0], (acc, n) => {
  _.times(_.random(max), () => acc.push({
    key: faker.random.uuid(),
    name: faker.address.city(),
    image: StockPlaceImage
    // image: {
    //   uri: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    // }
  }))
  return acc;
}, [])

type Props = {};
export default class App extends Component<Props> {
  state = {
    places: seed(),
    selectedPlace: null,
    modalActive: false
  }

  placeAddedHandler = newPlace => this.setState(({ places }) => ({
    places: places.concat({
      key: faker.random.uuid(),
      name: newPlace,
      image: StockPlaceImage
    })
  }))

  placeDeletedHandler = key => this.setState(({ places }) => ({
    places: places.filter(place => place.key !== key),
    modalActive: false
  }))

  placeSelectedHandler = key => this.setState(prevState => ({
    selectedPlace: _.find(prevState.places, { key }),
    modalActive: true
  }))

  toggleModalHandler = () => this.setState(({ modalActive }) => ({
    modalActive: !modalActive
  }))

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <PlaceDetail
            modalActive={this.state.modalActive}
            selectedPlace={this.state.selectedPlace}
            toggleModal={this.toggleModalHandler}
            deletePlace={this.placeDeletedHandler}
          />
          <PlaceInput addPlace={this.placeAddedHandler} />
          <PlaceList places={this.state.places} selectPlace={this.placeSelectedHandler} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subContainerTwo: {
    alignItems: 'center',
    width: '100%'
  },
  sc2Text: {
    textAlign: 'center'
  },
});
