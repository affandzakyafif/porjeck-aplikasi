import React from 'react'
import {View,Text,ActivityIndicator,ImageBackground,Image}from 'react-native'
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
             <View style={{alignItems:'center',margin:50,flex:1}}>
                <Text style={{ fontSize: 34, color: 'green' }}>Dzikir Pagi & Petang</Text>
             <View style={{justifyContent:'center',height:'100%',width:'100%',alignItems:'center'}}>
                     <Image source={require('./sdr/assets/alquran-dan-dzikir-ilustrasi-_160523104643-624.jpg')} style={{ height:200, width:200 }} />
                <ActivityIndicator size='large'/>
                 <Text>Mohon tunggu sebentar</Text>
                 
             </View>
                 
             </View>
         )
     }
    return(
        <Config/>
    )
}
}
export default App