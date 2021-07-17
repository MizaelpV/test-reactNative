import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  const {
    headerContainer,
    titleInvitation,
    searchContainer,
    iconContainer,
    hereIcon,
  } = styles;
  return (
    <View style={headerContainer}>
      <View style={searchContainer}>
        <View style={iconContainer}>
          <Text>⚙️</Text>
        </View>
        <Text style={hereIcon}>📍</Text>
      </View>
      <Text style={titleInvitation}>
        invitation <Text style={{color: '#a5cc5b'}}>homes</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderBottomColor: '#309447',
    borderBottomWidth: 1,
  },
  titleInvitation: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInput: {
    padding: '30',
  },
  searchContainer: {
    backgroundColor: '#83c366',
    width: 130,
    height: 35,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'whitesmoke',
    borderWidth: 2,
    borderColor: '#6d8fbb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hereIcon: {
    fontSize: 16,
    marginRight: 3,
    marginTop: 3,
  },
});
export default Header;
