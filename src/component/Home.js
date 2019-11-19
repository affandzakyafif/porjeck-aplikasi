import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView,
    TextInput,
    Image,
    ActivityIndicator,ImageBackground
} from 'react-native'

class App extends React.Component {

    render() {
        
        return (
        
            <View style={{flex:1,backgroundColor:'#66CDAA'}}>
                <View style={{ backgroundColor: 'green', height: 50, width: '100%', alignItems: 'center',marginBottom:250 }}>
                    <Image source={require('../../sdr/assets/59b512501a37ad3b38d7eb91cdf15504.jpg')} style={{ height: 300, width: '100%' }} />
                     
                    </View>
                    <View style={{ flexDirection: 'row', margin: 60}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Dzikir')}>
                            <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 20 }}>
                            <Image source={require('../../sdr/assets/reading-quran.png')}style={{height:'100%',width:'100%',borderRadius:20}}/>
                            <Text style={{ color: 'red' }}>Dzikir</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sholat')}>
                            <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 30 }}>
                            <Image source={require('../../sdr/assets/download.jpeg')} style={{height:'100%',width:'100%',borderRadius:25}}/>
                            <Text style={{ color: 'red' }}>Sholat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Asmauulhusna')}>
                            <View style={{ height: 100, borderWidth: 2, width: 100, margin: 3, alignItems: 'center', borderRadius: 25 }}>
                            <Image source={require('../../sdr/assets/images.jpeg')} style={{ height: '100%', width: '100%',borderRadius:20 }} />
                                <Text style={{ color: 'red' }}>Asmaul Husna</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
            
        )
    }
}
export default App

