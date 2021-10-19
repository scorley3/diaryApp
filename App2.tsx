import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Component } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9nZQLyme_oT3TEFWJgu10lr-U-K9bm6o",
  authDomain: "diaryapp-44376.firebaseapp.com",
  projectId: "diaryapp-44376",
  storageBucket: "diaryapp-44376.appspot.com",
  messagingSenderId: "762023111661",
  appId: "1:762023111661:web:1d04bc402fcbdfabded5e4",
  measurementId: "G-8QJZK358LX",
  databaseURL: "https://diaryapp-44376-default-rtdb.firebaseio.com/",
  //storageBucket: "
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default function App() {
  return (
    <View style={styles.container}>
	  <DashboardView />
      <StatusBar style="auto" />
    </View>
  );
}

class LogInForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			value: "",
			dashStyle: this.props.log,
			style: {
				display: this.props.log
			}
		}
		const rend = props.render;
		 this.handleChange = this.handleChange.bind(this);
		 this.handleSubmit = this.handleSubmit.bind(this);
	}	
	
	handleChange(event) {
		this.setState({value: event.target.value});
		//console.log(this.state)
	}
	
	
	render() {
	console.log(this.state);
	return (
		<View>
		<form onSubmit = {this.handleSubmit} style = {this.state.style}>
			<label>
				id num
				<input type = "text" value = {this.state.value} onChange = {this.handleChange} />
			</label>
			<input type = 'submit' value = "log in" />
			
		</form>
		</View>
		);
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({submitted: true, log: "none", style: {
			display: "none"
		}}, () => {
			console.log(this.state);
			this.render();
		});
		//this.setState({submitted: true});
		event.preventDefault();
		//console.log(this.state);
	}
}
class DashboardView extends React.Component {
	constructor(props) {
		super(props);
		//console.log(props);

		this.state = {
			log: "inline",
			style: {
				display: "inline"
			}} , () => {
				this.render();
			}
		
		
	}	
	change = () => {
		console.log("hi");
		this.setState({
			dash: this.props.dash,
			style: {
				display: "none"
			}});
		
		console.log(this.state);
		console.log("what");
	}
	
	render(props) {
	console.log(this.state);
	if (this.state.log == "inline") {
		return (
			<View style = {this.state.style}>
			<LogInForm />
			<View style = {{backgroundColor: "pink"}}>
			<Text> Today's Questions </Text>
			</View>
			<View style = {{backgroundColor: "lightPink"}}>
			<Text> Scrapbook </Text>
			</View>
			<View style = {{backgroundColor: "pink"}}>
			<Text> Past Entries </Text>
			</View>
			<Button onPress={this.change} active />
			</View>
			);
		} else {
			return (
			<View>
			<View style = {{backgroundColor: "pink"}}>
			<Text> Today's Questions </Text>
			</View>
			<View style = {{backgroundColor: "lightPink"}}>
			<Text> Scrapbook </Text>
			</View>
			<View style = {{backgroundColor: "pink"}}>
			<Text> Past Entries </Text>
			</View>
			<Button onPress={this.change} active />
			</View>
			);
		}
	}
	
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdb4f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
