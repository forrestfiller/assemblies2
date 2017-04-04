import React, { Component } from 'react'
import {
  View,
  Text,
	ScrollView,
	TextInput,
	TouchableOpacity
} from 'react-native'

import { extend } from 'underscore'
import NavigationBar from 'react-native-navbar'
import BackButton from '../../shared/BackButton'
import Colors from '../../styles/colors'
import { globals, formStyles } from '../../styles'

const styles = formStyles

class Login extends Component {
  constructor(){
    super()
		this.loginUser = this.loginUser.bind(this)
    this.goBack = this.goBack.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.changeEmail = this.changeEmail.bind(this)
		this.state = {
			email: '',
			password: '',
			errorMsg: ''
		}
  }

	loginUser(){
		// login user with username and password
	}

	changePassword(password){
		this.setState({ password })
	}

	changeEmail(email){
		this.setState({ email })
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
				<ScrollView style={styles.container}>
					<Text style={styles.h3}>
						Login with your email and password.
					</Text>
					<Text style={styles.h4}>
						Email
					</Text>
					<View style={styles.formField}>
						<TextInput
							autoFocus={true}
							returnKeyType='next'
							onSubmitEditing={() => this.password.focus()}
							onChangeText={this.changeEmail}
							keyboardType='email-address'
							autoCapitalize='none'
							maxLength={140}
							placeholderTextColor={Colors.copyMedium}
							style={styles.input}
							placeholder='Your email address'
						/>
					</View>
					<Text style={styles.h4}>Password</Text>
					<View style={styles.formField}>
						<TextInput
							ref={(e1) => this.password = e1 }
							returnKeyType='next'
							onChangeText={this.changePassword}
							secureTextEntry={true}
							autoCapitalize='none'
							maxLength={140}
							placeholderTextColor={Colors.copyMedium}
							style={styles.input}
							placeholder='Your password'
						/>
					</View>
					<View style={styles.errorContainer}>
						<Text style={styles.errorText}>
							{this.state.errorMsg}
						</Text>
					</View>
				</ScrollView>
				<TouchableOpacity
					style={styles.submitButton}
					onPress={this.loginUser}
				>
					<Text style={globals.largeButtonText}>Login</Text>
				</TouchableOpacity>
			</View>
    )
  }
}

export default Login
