import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/Ionicons'
import BackButton from '../../shared/BackButton'
import Colors from '../../styles/colors'
import { globals } from '../../styles'

class Login extends Component {
  constructor(){
    super()
    this.goBack = this.goBack.bind(this)
  }

  goBack(){
    this.props.navigator.pop()
  }

  render(){
    let titleConfig = { title: 'Login', tintColor: 'white' }
    return (
      <View style={globals.flexContainer}>
        <NavigationBar
          title={titleConfig}
          tintColor={Colors.brandPrimary}
          leftButton={<BackButton handlePress={this.goBack}/>}
        />
        <View style={globals.flexCenter}>
          <Text style={globals.h2}>
            Login
          </Text>
        </View>
      </View>
    )
  }
}

export default Login

