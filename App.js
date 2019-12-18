import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import List from './components/list';

import Pic from './assets/logo-og.png';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={str: [{id: 1, caption: '20 Lance Court'},{id: 2,caption: '12 Mercer Road'},{id: 3,caption: '80 Orrong Road'},{id: 4,caption: '14 Kooyong'},{id: 5,caption: '78 Hammerback'}]};
  }

  renderItem = ({item}) => {
    return(
<List item={item}/>
    );
  }

  render() {
  return (
    <View style={styles.container}>
    <View style={{flex: 1,width: '100%'}}>
    <View style={{flexDirection: 'row'}}>
    <View>
      <Icon name="arrow-left" size={20} style={{paddingTop: '1%',paddingLeft:'1%'}}/>
    </View>
    <View style={{alignSelf: 'center',flex: 1}}>
      <Text style={{fontSize: 20,alignSelf:'center'}}>Agent Profile</Text>
    </View>  
      </View>
      </View>
      <View style={{flex: 2,width: '100%',backgroundColor:'#E0E0E0',paddingTop:'5%'}}>
      <View style={{paddingLeft: '5%',flex:1,flexDirection:'row'}}>
      <View style={{paddingTop:'2%'}}>
        <Image source={Pic} style={{width: 100,height: 100,borderRadius: 50}}/>
      </View>
        <View style={{flex: 1,flexDirection: 'column',paddingLeft: '5%'}}>
          <Text style={{padding: '1%',fontSize: 18}}>Julian Millian</Text>
          <Text style={{padding: '1%',fontSize: 16}}>Senior Partner</Text>
          <Text style={{fontWeight: 'bold',paddingLeft: '1%',paddingBottom:'3%',fontSize: 15}}>845 followers</Text>
          <View style={{paddingLeft:'2%'}}>
          <View style={{padding: '2%',backgroundColor:'#C0C0C0',width:50}}>
          <Text style={{textAlign:'center'}}>Edit</Text>
          </View>
          </View>
        </View>
        </View>
      </View>
      <View style={{flex: 1,paddingTop:'5%',paddingBottom:'5%',borderTopWidth:1,borderBottomWidth:1,borderColor:'#E0E0E0',flexDirection:'row'}}>
      <View style={{flex: 1,flexDirection: 'row',width:'100%',alignItems:'flex-start'}}>
       <View style={{flex:1,paddingLeft:'5%'}}>
        <Text style={{fontSize:17,fontWeight: '700'}}>RT Edgar - Toorak</Text>
        <Text style={{fontSize: 15,color:'#808080'}}>10 Wallace Avenue</Text>
        <Text style={{fontSize: 15,color:'#808080'}}>Toorak Vic 3142</Text>
       </View>
       <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',paddingLeft:'15%'}}>
       <View style={{paddingLeft: '5%',paddingRight:'5%'}}>
       <View style={{paddingLeft:'8%'}}>
       <View style={{width:50,height:50,padding: '5%',borderWidth:1,borderRadius:25}}>
         <Icon name="comment-o" size={20} style={{alignSelf:'center',paddingTop: '25%'}}/>
       </View>
       </View>
       <Text style={{fontSize: 15,color:'#606060'}}>Message</Text>
       </View>
       <View style={{paddingLeft: '5%',paddingRight:'5%'}}>
       <View style={{paddingRight: '5%'}}>
       <View style={{width:50,height:50,padding: '5%',borderWidth:1,borderRadius:25}}>
         <Icon name="phone" size={20} style={{alignSelf:'center',paddingTop: '25%'}}/>
       </View>
       </View>
       <Text style={{paddingLeft:'20%',fontSize:15,color:'#606060'}}>Call</Text>
       </View>
       </View>
      </View>
      </View>
      <View style={{flex:2,width:'100%',alignItems:'center',paddingTop:'5%',paddingBottom:'5%'}}>
      <View style={{width: '95%',paddingLeft:'3%',paddingRight:'3%'}}>
      <Text style={{fontSize: 15}}>Julian is widely regarded as one of Australia's leading estate agents and specializes in sell-ing prestige homes and luxury developments. Her intellect, market knowledge and dedication combined with the support of her team, ensure her clients are provided with a world-class real-estate experience.</Text>
      </View>
      </View>
      <View style={{flex:4,borderWidth:1,width:'100%',alignItems:'center'}}>
      <FlatList data={this.state.str} 
         numColumns={3}
         renderItem={this.renderItem} 
         keyExtractor={(item, index) => index.toString()}/>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 30
  }
});
