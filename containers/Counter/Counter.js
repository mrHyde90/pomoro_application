import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vibrate} from '../../utils';
import Controller from '../../components/Controller/Controller';
import {CardSection} from '../../components/common/CardSection';
import {ButtonGeneral} from '../../components/common/ButtonGeneral';
import {START, STOP, RESET, MINUTOS, SEGUNDOS, MINUTOS_DESCANSO, SEGUNDOS_DESCANSO, WORK_LABEL, DESCANSO_LABEL} from '../../components/types';
import WorkTimer from '../../components/WorkTimer/WorkTimer';

class Counter extends Component{
	state = {
		count: 0,
		descanso: true,
		stop: false,
		minutos: 0,
		segundos: 0,
		minutosDescanso: 0,
		segundosDescanso: 0,
		showController: false
	};

	//Poner la funcion de incremento
	//Para usar el prevState no olvides poner el ()
	inc = () => {
		this.setState(prevState => ({
			count: prevState.count + 1
		}))
	}

	dec = () => {
		if(this.state.count !== 0 && !this.state.stop){
			this.setState(prevState => ({
				count: prevState.count - 1
			}))
		} else {
			if(this.state.descanso && this.state.count === 0){
				vibrate();
				//no actualizar el state dentro de una funcion que vaya en el render
				this.switchTimer();
			} 
		}
		if(this.state.descanso === false && this.state.count === 0){
			console.log("Hello ya se acabo todo");
			clearInterval(this.interval);
		}
	}

	switchTimer = () => {
		const valorPomodoro = this.state.segundosDescanso + this.state.minutosDescanso * 60;
		this.setState(prevState => ({count: valorPomodoro, descanso: false })); 
	};

	formatoSegundos(){
		let segundos = this.state.count % 60;
		let formatoSegundos = "";
		if(segundos < 10){
			formatoSegundos = "0" + segundos;
			return formatoSegundos;
		}
		return segundos;
	}

	formatoMinutos(){
		let minutos = parseInt(this.state.count / 60);
		let formatoMin = "";
		if (minutos < 10){
			formatoMin = "0" + minutos;
			return formatoMin;
		}
		return minutos;
	}

	controllersActivate = (titulo) => {
		switch(titulo){
			case START:
				this.setState(prevState => ({stop: false}));
				break;
			case STOP:
				this.setState(prevState => ({stop: true}));
				break;
			case RESET:
				this.iniciarTimer();
				break;
			default: 
				console.log("No se encontro nada");
		}
	}

	iniciarTimer = () => {
		if(this.interval){
			clearInterval(this.interval);
		}
		const valorPomodoro = this.state.segundos + this.state.minutos * 60;
		this.setState(prevState => ({count: valorPomodoro, descanso: true, stop: false, showController: true}));
		this.interval = setInterval(this.dec, 1000);
	}

	volverAlPiloto = () => {
		clearInterval(this.interval);
		this.setState(prevState => ({count: 0, 
			descanso: true, stop: false, minutos: 0, 
			segundos: 0, minutosDescanso: 0, segundosDescanso: 0, 
			showController: false}));
	}

	putTime = (value, timeType) => {
		let valueInt = parseInt(value);
		if(!Number.isInteger(valueInt)){
			valueInt = 0;
		}
		if(valueInt > 59){
			return
		}
		switch(timeType){
			case MINUTOS:
				this.setState(prevState => ({minutos: valueInt}));
				break;
			case SEGUNDOS:
				this.setState(prevState => ({segundos: valueInt}));
				break;
			case MINUTOS_DESCANSO:
				this.setState(prevState => ({minutosDescanso: valueInt}));
				break;
			case SEGUNDOS_DESCANSO:
				this.setState(prevState => ({segundosDescanso: valueInt}))
				break;
			default:
				console.log("no encontre nada");
		}
	}

	render(){
		let segundos = this.formatoSegundos();
		let minutos = this.formatoMinutos();
		let valorMinutos = "";
		if(this.state.minutos != 0){
			valorMinutos = this.state.minutos.toString();
		}
		let valorSegundos = "";
		if(this.state.segundos != 0){
			valorSegundos = this.state.segundos.toString();
		}
		let valorMinutosDescanso = "";
		if(this.state.minutosDescanso != 0){
			valorMinutosDescanso = this.state.minutosDescanso.toString();
		}
		let valorSegundosDescanso = "";
		if(this.state.segundosDescanso != 0){
			valorSegundosDescanso = this.state.segundosDescanso.toString();
		}
		let controladores = null;
		let showWorkTimer = null;
		if(this.state.showController === true){
			controladores = <View>
								<Text style={styles.count}> {minutos}:{segundos} </Text>	
								<Controller activateController={this.controllersActivate} />
								<CardSection>
										<ButtonGeneral 
											onPress={this.volverAlPiloto} >
												<Text>Volver</ Text>
										</ButtonGeneral>
									</ CardSection>
							</View>;
		} else {
			showWorkTimer = <View>
								<WorkTimer valorMinutos={valorMinutos} valorSegundos={valorSegundos}
									putTime={this.putTime} MINUTOS={MINUTOS} 
									SEGUNDOS={SEGUNDOS} label={WORK_LABEL}/>
								<WorkTimer 
									valorMinutos={valorMinutosDescanso} valorSegundos={valorSegundosDescanso}
									putTime={this.putTime} MINUTOS={MINUTOS_DESCANSO} 
									SEGUNDOS={SEGUNDOS_DESCANSO} label={DESCANSO_LABEL}/>
									<CardSection>
										<ButtonGeneral 
											onPress={this.iniciarTimer} >
												<Text>Iniciar</ Text>
										</ButtonGeneral>
									</ CardSection>
							</View>;
		}
		return(
			<View>
				{showWorkTimer}
				{controladores}
			</View>
		);
	}
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
    textAlign: 'center'
  }
})

export default Counter;