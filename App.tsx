import { StatusBar } from 'expo-status-bar';
import React from 'react';
import useState from 'react';
import { StyleSheet, Text, View, Button, Component } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
	  <LogInForm />
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
			dashStyle: "inline",
			style: {
				display: "inline"
			}
		}
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
		<DashboardView dash = {this.state.dashStyle} />
		</View>
		);
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState({submitted: true, dashStyle: "none", style: {
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
		console.log(props);
		this.state = {
			dash: this.props.dash,
			style: {
				display: this.props.dash
			}} , () => {
				this.render();
			}
		
		
		 this.handleClick = this.handleChange.bind(this);
	}	
	handleChange(event) {
		this.setState({
			dash: this.props.dash,
			style: {
				display: this.state.dash
			}}
		, () => {
			this.render();
			console.log(this.state.style);
		});
	}
	change(event){
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
	if (this.state.dash == "inline") {
		return (
			<View style = {this.state.style}>
			<Text> Today's Questions </Text>
			<Text> Scrapbook </Text>
			<Text> Past Entries </Text>
			<Button onClick={this.change} active />
			</View>
			);
		} else {
			return (
			<View>
			<Text> wowza </Text>
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
