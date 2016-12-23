import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 4,
    marginVertical: 4,
    backgroundColor: 'white',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 4,
    fontFamily: 'open-sans',
    fontSize: 14,
    color: colors.black,
  },
  type: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: colors.black,
    width: Dimensions.get('window').width / 2,
  },
  order: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
  },
});

export default class Resource extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View
        style={ styles.cardContainer }
        elevation={ 2 }
        shadowColor="rgba(0, 0, 0, 0.12)"
        shadowOpacity={ 0.8 }
        shadowRadius={ 2 }
        shadowOffset={{
          height: 1,
          width: 2,
        }}
      >
        <View style={ styles.headerRow }>
          <Text style={ styles.type }>
            {this.props.resource.type.toUpperCase()}
          </Text>
          <Text style={ styles.order }>
            {this.props.resource.order}
          </Text>
        </View>
        <Text style={ styles.content }>
          {JSON.stringify(this.props.resource.people) || JSON.stringify(this.props.resource.name)}
        </Text>
      </View>
    );
  }
}
