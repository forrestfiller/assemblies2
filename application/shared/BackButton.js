import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { globals } from '../styles'

const BackButton = ({ handlePress }) => (
  <TouchableOpacity
    onPress={handlePress}
    style={globals.pa1}
  >
    <Icon name='ios-arrow-back' size={36} color='white' />
  </TouchableOpacity>
)

export default BackButton
