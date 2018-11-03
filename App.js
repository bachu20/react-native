/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView, View} from 'react-native';
import {connect} from 'react-redux'
import _ from 'lodash'

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

import {addPlace, deletePlace, selectPlace, unselectPlace} from './src/store/actions/index'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    const {places, selectedPlace, addPlace, deletePlace, selectPlace, unselectPlace} = this.props

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          <PlaceDetail
            place={selectedPlace}
            deletePlace={deletePlace}
            unselectPlace={unselectPlace}
          />
          <PlaceInput addPlace={addPlace} />
          <PlaceList places={places} selectPlace={selectPlace} />
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

const mapStateToProps = ({ placesStore: { places, selectedPlace } }) => ({ places, selectedPlace })
const mapDispatchToProps = dispatch => ({
  addPlace: (name) => dispatch(addPlace(name)),
  deletePlace: (key) => dispatch(deletePlace(key)),
  selectPlace: (key) => dispatch(selectPlace(key)),
  unselectPlace: () => dispatch(unselectPlace())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)