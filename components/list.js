import React, {Component, PureComponent} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Pic from '../assets/logo-og.png';


class List extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
    return (
        <View elevation={5} style={{paddingTop: 1,paddingBottom: 1,paddingRight:1,paddingLeft:1}}>
        <ImageBackground style = {{ width: 115 , height: 115, elevation: 5 }} source={Pic}>
        <View style = {{ position: 'relative',  flex: 1, alignItems: 'center'}}>
        <View style={{position: 'absolute', bottom: 5 ,width: '100%',borderColor: 'white' }}>
        <Text style={{ width: '100%',height:'100%', fontSize: 15, textAlign: 'center', alignSelf:'center',color: 'white'}}>
        {this.props.item.caption}
        </Text>
        </View>
        </View>
        </ImageBackground>
        </View>
    );
  }
}
  
export default List;