import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Components
import {ButtonGeneral} from '../../components/common/ButtonGeneral';
import {CardSection} from '../../components/common/CardSection';
import Counter from '../Counter/Counter';
//Nota importante si cambias el state de un container, solo se actualiza esa parte dentro
//de la aplicacion, es decir solo ese container se actualiza sin actualizar a otros como a Counter

class Controller extends Component {
	state = {
		stop: false,
		reset: false
	};

	probar = (titulo) => {
		switch(titulo){
			case "Start":
				this.setState(prevState => ({stop: false}));
				break;
			case "Stop":
				console.log("Estas en el Stop");
				this.setState(prevState => ({stop: true}));
				break;
			case "Reset":
				console.log("Estas en el Reset");
				this.setState(prevState => ({reset: true}));
				break;
			default: 
				console.log("No se encontro nada");
		}
	}

	render(){
		const controllersTitle = ["Start", "Stop", "Reset"];

		return(
			<View>
				<CardSection>
					<Counter tiempo={this.state.stop}/>
				</CardSection>
				<CardSection>
					<ButtonGeneral onPress={() => {this.probar(controllersTitle[0])}} >
						{controllersTitle[0]}
					</ButtonGeneral>
					<ButtonGeneral onPress={() => {this.probar(controllersTitle[1])}}>
						{controllersTitle[1]}
					</ButtonGeneral>
					<ButtonGeneral onPress={() => {this.probar(controllersTitle[2])}}>
						{controllersTitle[2]}
					</ButtonGeneral>
				</CardSection> 

			</View>
		);
	}
}

const styles = StyleSheet.create({
  buttonControllers: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonStyle: {
  	height: 20,
  	width: 20
  }
})

export default Controller;