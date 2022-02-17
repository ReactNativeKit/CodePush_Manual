import React from 'react';
import {View,Text} from 'react-native';
import withCodePush from './codepush';

class App extends React.Component {
   render() {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#74959A'}}>
      <Text style={{fontSize:20, color:'#EEEEEE'}}>
        Hello! I am a react native app.....
      </Text>
      <Text style={{fontSize:20}}>Welcome to Jurassic World!</Text>
      </View>
     );
  }
}

export default withCodePush(App);