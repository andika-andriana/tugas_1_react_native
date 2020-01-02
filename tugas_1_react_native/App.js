import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import MenuUtama from './Components/MenuUtama';
import MenuGame from './Components/MenuGame';
import MenuBerita from './Components/MenuBerita';
import MenuHits from './Components/MenuHits';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="green" />
        <Header />
        <MenuUtama />
        <MenuGame />
        <MenuBerita />
        <MenuHits />
        <Footer />
      </View>
    );
  }
}

const Header = () => {
  return (
    <View>
      <Text>Halaman Header</Text>
    </View>
  );
};

const Footer = () => {
  var niomic = '@Niomic';
  return (
    <View>
      <Text>Footer {niomic}</Text>
    </View>
  );
};
