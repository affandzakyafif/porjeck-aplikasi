import React from 'react'
import {View,Text} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


class App extends React.Component{
    render(){
        return (
            <View>
                <Text>
                     Dzikir pagi 
                </Text>
            </View>
        )
    }
}

class Appt extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Dzikir sore 
                </Text>
            </View>
        )
    }
}
const TabNavigator = createBottomTabNavigator({
    Pagi:{screen:App},
    Sore:{screen:Appt}
})
export default createAppContainer(TabNavigator)