import React from 'react'
import {View,Text,FlatList,ScrollView,Image} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    ambildata = () => {
        return fetch('https://affandzaky.000webhostapp.com/datajson3.json')
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
        const {zikir,zikir2,arti,zikir3,arti2,zikir4,arti3,zikir5,arti4,zikir6,arti5,zikir7,arti6,zikir8,arti7,zikir9,arti8,zikir10,arti9,zikir11,arti10,zikir12,arti11,zikir13,arti12,zikir14,arti13,zikir15,arti14,zikir16,arti15,zikir17,arti16,zikir18,arti17} = item
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:25,margin:10}}>Dzikir yang Dibaca di Waktu Pagi</Text>
                    
                        <Text style={{fontSize:25}}>{zikir}</Text>
                        </View>
                        <Text style={{fontSize:20,color:'green',marginTop:20}}>1.Membaca ayat kursi</Text>
                        <Text style={{fontSize:25}}>{zikir2}</Text>
                        <Text style={{fontSize:15}}>{arti}</Text>
                        <Text style={{fontSize:20,color:'green'}}>2.Membaca surat Al Ikhlas(3x), Al Falaq(3x), An Naas(3x)</Text>
                        <Text style={{fontSize:20,color:'green'}}>3.</Text>
                        <Text style={{fontSize:25}}>{zikir3}</Text>
                        <Text style={{fontSize:15}}>{arti2}</Text>
                        <Text style={{ fontSize: 20, color: 'green' }}>4.</Text>
                        <Text style={{fontSize:25}}>{zikir4}</Text>
                        <Text style={{fontSize:15}}>{arti3}</Text>
                        <Text style={{fontSize:20,color:'green'}}>5.Membaca Sayyidul Istighfar</Text>
                        <Text style={{fontSize:25}}>{zikir5}</Text>
                        <Text style={{fontSize:15}}>{arti4}</Text>
                        <Text style={{fontSize:20,color:'green'}}>6.</Text>
                        <Text style={{fontSize:25}}>{zikir6}</Text>
                        <Text style={{fontSize:15}}>{arti5}</Text>
                        <Text style={{fontSize:20,color:'green'}}>7.</Text>
                        <Text style={{fontSize:25}}>{zikir7}</Text>
                        <Text style={{fontSize:15}}>{arti6}</Text>
                        <Text style={{fontSize:20,color:'green'}}>8.</Text>
                        <Text style={{fontSize:25}}>{zikir8}</Text>
                        <Text style={{fontSize:15}}>{arti7}</Text>
                        <Text style={{fontSize:20,color:'green'}}>9.</Text>
                        <Text style={{fontSize:25}}>{zikir9}</Text>
                        <Text style={{fontSize:15}}>{arti8}</Text>
                        <Text style={{fontSize:20,color:'green'}}>10.</Text>
                        <Text style={{fontSize:25}}>{zikir10}</Text>
                        <Text style={{fontSize:15}}>{arti9}</Text>
                        <Text style={{fontSize:20,color:'green'}}>11.</Text>
                        <Text style={{fontSize:25}}>{zikir11}</Text>
                        <Text style={{fontSize:15}}>{arti10}</Text>
                        <Text style={{fontSize:20,color:'green'}}>12.</Text>
                        <Text style={{fontSize:25}}>{zikir12}</Text>
                        <Text style={{fontSize:15}}>{arti11}</Text>
                        <Text style={{fontSize:20,color:'green'}}>13.</Text>
                        <Text style={{fontSize:25}}>{zikir13}</Text>
                        <Text style={{fontSize:15}}>{arti12}</Text>
                        <Text style={{fontSize:20,color:'green'}}>14.</Text>
                        <Text style={{fontSize:25}}>{zikir14}</Text>
                        <Text style={{fontSize:15}}>{arti13}</Text>
                        <Text style={{fontSize:20,color:'green'}}>15.</Text>
                        <Text style={{fontSize:25}}>{zikir15}</Text>
                        <Text style={{fontSize:15}}>{arti14}</Text>
                        <Text style={{fontSize:20,color:'green'}}>16.</Text>
                        <Text style={{fontSize:25}}>{zikir16}</Text>
                        <Text style={{fontSize:15}}>{arti15}</Text>
                        <Text style={{fontSize:20,color:'green'}}>17.</Text>
                        <Text style={{fontSize:25}}>{zikir17}</Text>
                        <Text style={{fontSize:15}}>{arti16}</Text>
                        <Text style={{fontSize:20,color:'green'}}>18.</Text>
                        <Text style={{fontSize:25}}>{zikir18}</Text>
                        <Text style={{fontSize:15}}>{arti17}</Text>
                        <Text></Text>
               
                    
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

class Appt extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    ambildata = () => {
        return fetch('https://affandzaky.000webhostapp.com/datajson4.json')
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
        const { zikir, zikir2, arti, zikir3, arti2, zikir4, arti3, zikir5, arti4, zikir6, arti5, zikir7, arti6, zikir8, arti7, zikir9, arti8, zikir10, arti9, zikir11, arti10, zikir12, arti11, zikir13, arti12, zikir14, arti13} = item
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, margin: 10 }}>Dzikir yang Dibaca di Waktu Pagi</Text>
                        <Text style={{ fontSize: 25 }}>{zikir}</Text>
                    </View>
                    <Text style={{ fontSize: 20, color: 'green', marginTop: 20 }}>1.Membaca ayat kursi</Text>
                    <Text style={{ fontSize: 25 }}>{zikir2}</Text> 
                    <Text style={{ fontSize: 15 }}>{arti}</Text> 
                    <Text style={{ fontSize: 20, color: 'green' }}>2.Membaca surat Al Ikhlas(3x), Al Falaq(3x), An Naas(3x)</Text> 
                    <Text style={{ fontSize: 20, color: 'green' }}>3.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir3}</Text>
                    <Text style={{ fontSize: 15 }}>{arti2}</Text>  
                    <Text style={{ fontSize: 20, color: 'green' }}>4.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir4}</Text>
                    <Text style={{ fontSize: 15 }}>{arti3}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>5.Membaca Sayyidul Istighfar</Text>
                    <Text style={{ fontSize: 25 }}>{zikir5}</Text>
                    <Text style={{ fontSize: 15 }}>{arti4}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>6.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir6}</Text>
                    <Text style={{ fontSize: 15 }}>{arti5}</Text> 
                    <Text style={{ fontSize: 20, color: 'green' }}>7.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir7}</Text>
                    <Text style={{ fontSize: 15 }}>{arti6}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>8.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir8}</Text>
                    <Text style={{ fontSize: 15 }}>{arti7}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>9.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir9}</Text>
                    <Text style={{ fontSize: 15 }}>{arti8}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>10.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir10}</Text>
                    <Text style={{ fontSize: 15 }}>{arti9}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>11.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir11}</Text>
                    <Text style={{ fontSize: 15 }}>{arti10}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>12.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir12}</Text>
                    <Text style={{ fontSize: 15 }}>{arti11}</Text>
                    
                    <Text style={{ fontSize: 20, color: 'green' }}>13.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir13}</Text>
                    <Text style={{ fontSize: 15 }}>{arti12}</Text>
                    <Text style={{ fontSize: 20, color: 'green' }}>14.</Text>
                    <Text style={{ fontSize: 25 }}>{zikir14}</Text>
                    <Text style={{ fontSize: 15 }}>{arti13}</Text>
                    
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

const TabNavigator = createBottomTabNavigator({
    Pagi:{screen:App},
    Sore:{screen:Appt}
})
export default createAppContainer(TabNavigator)