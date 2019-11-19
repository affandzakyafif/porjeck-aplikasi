import {createAppContainer}from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,ScrollView,Image
} from 'react-native'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    ambildata = () => {
        return fetch('https://affandzaky.000webhostapp.com/datajson.json')
            .then((respose) => respose.json())
            .then((resposeJson) => {
                console.log(resposeJson)
                this.setState({
                    data: resposeJson
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.ambildata()
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
    renderItems = ({ item, index }) => {
        const { niat, takbir, sunah, doa, berdiri, alfatihah, alfa, ruku, doaa, itidal, tahmid, doai, sujud, sujudd, duduk, doanya, dudukif, doanyaa, solawat, tasahudd, tasahud,arti,artii,berdoa,berdoaa,salam,salaam,ucap,kata,tahajud,doatahajud,artiindo} = item
        return (
            <View style={{flex:1}}>
           <ScrollView>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:24,margin:10}}>TATA CARA SHOLAT:</Text>
            </View> 
            <Text style={{fontSize:20,color:'green'}}>1.Niat karena allah</Text>
            <Text style={{fontSize:15}}>{niat}</Text>
            <Text style={{fontSize:20,color:'green'}}>2.Takbirotul Ihram</Text>
            <Image source={require('../../sdr/assets/gs-3.jpg')}/>
            <Text style={{fontSize:15}}>{takbir}</Text>
            <Text style={{fontSize:15}}>{sunah}</Text>
            <Text style={{fontSize:25}}>{doa}</Text>
            <Text style={{fontSize:20,color:'green'}}>3.Berdiri bagi yang mampu</Text>
            <Text style={{fontSize:15}}>{berdiri}</Text>
            <Text style={{fontSize:20,color:'green'}}>4.Membaca al-fatihah</Text>
            <Text style={{fontSize:15}}>{alfatihah}</Text>
            <Text style={{fontSize:15}}>{alfa}</Text>
            <Text style={{fontSize:20,color:'green'}}>5.Ruku'</Text>
            <Image source={require('../../sdr/assets/gs-9.jpg')}/>
            <Text style={{fontSize:15}}>{ruku}</Text>
            <Text style={{fontSize:25}}>{doaa}</Text>
            <Text style={{fontSize:20,color:'green'}}>6.I'tidal(Bangun dari Ruku')</Text>
            <Text style={{fontSize:15}}>{itidal}</Text>
            <Text style={{fontSize:25}}>{tahmid}</Text>
                    <Text style={{fontSize:15}}>{doai}</Text>
                    <Text style={{fontSize:20,color:'green'}}>7.Sujud</Text>
                    <Image source={require('../../sdr/assets/gs-12.jpg')}/>
                    <Text style={{fontSize:15}}>{sujud}</Text>
                    <Text style={{fontSize:25}}>{sujudd}</Text>
                    <Text style={{fontSize:20,color:'green'}}>8.Duduk di antara 2 sujud</Text>
                    <Image source={require('../../sdr/assets/gs-17.jpg')} style={{height:400,width:300}}/>
                    <Text style={{fontSize:15}}>{duduk}</Text>
                    <Text style={{fontSize:25}}>{doanya}</Text>
                    <Text style={{fontSize:15}}>{dudukif}</Text>
                    <Text style={{fontSize:25}}>{doanyaa}</Text>
                    <Text style={{fontSize:15}}>{solawat}</Text>
                    <Text style={{fontSize:20,color:'green'}}>9.Duduk pada tasyahud akhir</Text>
                    <Text style={{fontSize:20,color:'green'}}>10.Tasyahud akhir</Text>
                    <Image source={require('../../sdr/assets/gs-21.jpg')}/>
                    <Text style={{fontSize:20,color:'green'}}>11.Salawat atas Nabi Shalaullahu Alaihi Wasallam setelah tasyahud akhir</Text>
                    <Text style={{fontSize:15}}>{tasahudd}</Text>
                    <Text style={{fontSize:25}}>{tasahud}</Text>
                    <Text style={{fontSize:15}}>{arti}</Text>
                    <Text style={{fontSize:15}}>{artii}</Text>
                    <Text style={{fontSize:25}}>{berdoa}</Text>
                    <Text style={{fontSize:15}}>{berdoaa}</Text>
                    <Text style={{fontSize:20,color:'green'}}>12.Salam</Text>
                    <Text style={{fontSize:15}}>{salam}</Text>
                    <Text style={{fontSize:15}}>{salaam}</Text>
                    <Text style={{fontSize:25}}>{ucap}</Text>
                    <Text style={{fontSize:15}}>{kata}</Text>
                    <Text style={{fontSize:20,color:'green'}}>13.Thuma’ninah</Text>
                    <Text style={{fontSize:20,color:'green'}}>14. Tertib Rukun-rukunnya</Text>
                    <Image source={require('../../sdr/assets/berdoaa.jpg')} style={{height:200,width:200}}/>
                    <Text style={{fontSize:20,color:'blue'}}>Doa Setelah Shalat Tahajjud</Text>
                    <Text style={{fontSize:15}}>{tahajud}</Text>
                    <Text style={{fontSize:25}}>{doatahajud}</Text>
                    <Text style={{fontSize:15}}>{artiindo}</Text>
                    </ScrollView>
            </View>
        )

    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={(item) => item.toString()}
                    renderItem={this.renderItems}
                // ListEmptyComponent={this.ListEmptyView}

                />
            </View>
        );
    }
}
class Appt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    ambildata = () => {
        return fetch('https://affandzaky.000webhostapp.com/datajson2.json')
            .then((resposen) => resposen.json())
            .then((resposenJson) => {
                console.log(resposenJson)
                this.setState({
                    data: resposenJson
                })
            })
            .catch((error) => console.log(error))
    }

    componentDidMount() {
        this.ambildata()
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }
    renderItems = ({ item, index }) => {
        const {zikir,zikir2,arti,zikir3,arti2,zikir4,arti3,zikir5,arti4,zikir6,arti5} = item
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:24,margin:10}}>DZIKIR SETELAH SHOLAT:</Text> 
                </View>
                <Text style={{fontSize:25}}>[1]</Text>
                <Text style={{fontSize:25}}>{zikir}</Text> 
                <Text style={{fontSize:25}}>{zikir2}</Text> 
                <Text state={{fontSize:15}}>{arti}</Text> 
                <Text style={{fontSize:25}}>[2]</Text>
                <Text style={{fontSize:25}}>{zikir3}</Text>
                <Text style={{fontSize:15}}>{arti2}</Text>
                    <Text style={{fontSize:25}}>[3]</Text>
                    <Text style={{fontSize:25}}>{zikir4}</Text>
                    <Text style={{fontSize:15}}>{arti3}</Text>
                    <Text style={{fontSize:25}}>[4]</Text>
                    <Text style={{fontSize:25}}>{zikir5}</Text>
                    <Text style={{fontSize:15}}>{arti4}</Text>
                    <Text style={{fontSize:25}}>[5]</Text>
                    <Text style={{fontSize:15}}>Membaca ayat Kursi setiap selesai shalat (fardhu)</Text>
                    <Text style={{fontSize:25}}>[6]</Text>
                    <Text style={{fontSize:15}}>Membaca surat Al-Ikhlas, Al-Falaq dan An-Naas setiap selesai shalat (fardhu)</Text>
                    <Text style={{fontSize:25}}>[7]</Text>
                    <Text style={{fontSize:25}}>{zikir6}</Text>
                    <Text style={{fontSize:15}}>{arti5}</Text>
                    <Text style={{fontSize:15}}>Semoga bisa diamalkan.</Text>
                    </ScrollView>
            </View>
        )

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    keyExtractor={(item) => item.toString()}
                    renderItem={this.renderItems}
                // ListEmptyComponent={this.ListEmptyView}

                />
            </View>
        );
    }
}



const TabNanigator = createMaterialTopTabNavigator({
    Sholat:{screen:App},
    Zikir:{screen:Appt}
})
export default createAppContainer(TabNanigator)

