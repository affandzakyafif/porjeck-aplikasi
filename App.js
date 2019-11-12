import React from 'react'
import {View,Text,ActivityIndicator}from 'react-native'
import Config from './src/config/index'

class App extends React.Component{
    state={
        role:true
    }
render (){
    setTimeout(()=>{
        this.setState({
            role:false
        })
    },5000)
     if (this.state.role){
         return(
             <View style={{justifyContent:'center',height:'100%',width:'100%',alignItems:'center'}}>
                 <ActivityIndicator size='large'/>
                 <Text>Mohon tunggu sebentar</Text>
             </View>
         )
     }
    return(
        <Config/>
    )
}
}
export default App