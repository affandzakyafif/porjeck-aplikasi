import React from 'react'
import {StyleSheet,image}from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from '../component/Home'
import Dzikir from '../component/dzikir'
import Sholat from '../component/sholat'
import Asmauulhusna from '../component/asmauulhusna'

const App = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:'Muslim_Praktis'
        }
    },
    Dzikir:{
        screen:Dzikir,
        navigationOptions:{
            title:'Dzikir pagi petang'
        }
    },
    Sholat:{
        screen:Sholat,
        navigationOptions:{
            title:'Sholat'
        }
    
    },
    Asmauulhusna:{
        screen:Asmauulhusna,
        navigationOptions:{
            title:'asmaul husna'
        }
    }
})
export default createAppContainer(App)