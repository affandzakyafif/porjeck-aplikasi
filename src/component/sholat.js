import React from 'react'
import { View, Text } from 'react-native'
import {createAppContainer}from 'react-navigation'
import {createMaterialTopTabNavigator}from 'react-navigation-tabs'


class App extends React.Component{
    render(){
    return (
        <View>
            <Text>
                Sholat
            </Text>
        </View>
    )
}}
class Appt extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    zikir
                </Text>
            </View>
        )
    }
}

const TabNanigator = createMaterialTopTabNavigator({
    Sholat:{screen:App},
    Zikir:{screen:Appt}
})
export default createAppContainer(TabNanigator)