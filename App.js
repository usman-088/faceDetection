

import React, {useState} from 'react';
import { View,ScrollView,Text,Image} from 'react-native'
import Camera from './components/CameraApp'

function App(){
  const [imageUri,setImageUri]=useState(null)
  return (
    <View style={{flex:1}}>

      <Camera style={{flex: 1}} setImageUri={setImageUri} />
      {/* <Text>helooo moazz</Text> */}
      <Image style={{flex:1}} source={{uri:imageUri}}/>

    </View>
      

  )
}



export default App;
