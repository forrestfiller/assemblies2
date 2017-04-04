import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import ActivityView from './activity/ActivityView'
import MessagesView from './messages/MessagesView'
import ProfileView from './profile/ProfileView'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      selectedTab: 'Activity'
    }
  }

  render(){
    return (
      <TabBarIOS>

        <Icon.TabBarItemIOS
          title='Activity'
          selected={this.state.selectedTab === 'Activity'}
          iconName='ios-pulse'
          onPress={() => this.setState({ selectedTab: 'Activity' })}
        >
          <ActivityView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title='Messages'
          selected={this.state.selectedTab === 'Messages'}
          iconName='ios-chatboxes'
          onPress={() => this.setState({ selectedTab: 'Messages' })}
        >
          <MessagesView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title='Profile'
          selected={this.state.selectedTab === 'Profile'}
          iconName='person'
          onPress={() => this.setState({ selectedTab: 'Profile' })}
        >
          <ProfileView />
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }
}

export default Dashboard
