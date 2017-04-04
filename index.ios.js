import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import Landing from './application/components/Landing'
import Dashboard from './application/components/Dashboard'
import { globals } from './application/styles'

import Register from './application/components/accounts/Register'
import Login from './application/components/accounts/Login'

class assemblies2 extends Component {

  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                 <Landing navigator={navigator} />
            )
            case 'Dashboard':
              return (
                <Dashboard navigator={navigator} />
            )
            case 'Register':
              return (
                <Register navigator={navigator} />
            )
            case 'Login':
              return (
                <Login navigator={navigator} />
            )


          }
        }}
      />
    )
  }
}

AppRegistry.registerComponent('assemblies2', () => assemblies2)
