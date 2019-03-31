



import React from 'react';
import {Text , AppRegistry} from 'react-native';


import {WebView} from 'react-native';

const App = () => {
    return (
      // <Text>hello sdfdsworld from nunna</Text>
      <WebView
        source={{url: 'https://nanawix.herokuapp.com'}}
        style={{marginTop: 20}}
      />
    );
}

// const App = ()=>{
//   return(
//     <Text>hello sdfdsworld from nunna</Text>
//   )
// }
 
  


AppRegistry.registerComponent('albums', () => App);

