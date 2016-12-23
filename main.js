import Exponent, { Font, Components } from 'exponent';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  StatusBar,
} from 'react-native';
import order from './lib/order';
import colors from './config/colors';
import Resource from './components/Resource';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const resources = [
  {
    type: 'Person',
    order: 1,
    name: 'Brian',
  },
  {
    type: 'Place',
    order: 2,
    name: 'Ohio',
  },
  {
    type: 'Place',
    order: 12,
    name: 'Ohio',
  },
  {
    type: 'Person',
    order: 14,
    name: 'Sarah',
  },
  {
    type: 'Person',
    order: 199,
    name: 'Sam',
  },
  {
    type: 'Person',
    order: 19,
    name: 'Eric',
  },
  {
    type: 'Place',
    order: 20,
    name: 'Home',
  },
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      loading: true,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./fonts/OpenSans-Bold.ttf'),
      'open-sans-light': require('./fonts/OpenSans-Light.ttf'),
      'open-sans': require('./fonts/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('./fonts/OpenSans-Semibold.ttf'),
    });
    this.setState({
      loading: false,
      resources: order(resources),
    });
  }


  render() {
    return this.state.loading ? <Components.AppLoading /> : (
      <View style={ styles.container }>
        <StatusBar barStyle="dark-content" />
        <ListView
          enableEmptySections
          dataSource={ ds.cloneWithRows(this.state.resources) }
          renderRow={ r => <Resource resource={ r } /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 20,
    backgroundColor: colors.eggshell,
  },
});

Exponent.registerRootComponent(App);
