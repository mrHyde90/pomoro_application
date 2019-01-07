/* 
    File where I put code that I will not use anymore but is cool

    putMinutes = (value) => {
		const valueInt = parseInt(value);
		if(!Number.isInteger(valueInt)){
			this.setState(prevState => ({minutos: 0}));
			return
		}
		this.setState(prevState => ({minutos: valueInt}));
	}

	putSeconds = (value) => {
		const valueInt = parseInt(value);
		if(!Number.isInteger(valueInt)){
			this.setState(prevState => ({segundos: 0}));
			return
		}
		this.setState(prevState => ({segundos: valueInt}));
	}
*/


/*
	<CardSection>
					<Input 
						label="Minutos"
						placeholder="59"
						value={valorMinutos}
						onChangeText={value => {this.putTime(value, MINUTOS)} }
					/>
				</ CardSection>
				<CardSection>
					<Input 
						label="Segundos"
						placeholder="59"
						value={valorSegundos}
						onChangeText={value => {this.putTime(value, SEGUNDOS)}}
					/>
				</ CardSection>
				<CardSection>
				<ButtonGeneral 
					onPress={this.iniciarTimer} >
						<Text>Iniciar</ Text>
					</ButtonGeneral>
				</ CardSection>
*/

// nO JODAS SI PUEDES PONER CLASS PROPERTIES
	//lolamon = "";

//Funcion que se ejecuta despues de montar la aplicacion, despues del constructor y el render
//componentDidMount(){
	//Aqui es en donde se encuentran los valores del state
	//cuando el controller se actualiza, este queda igual
	//solo se ejecuta una vez
	//console.log("componentDidMount");
	//this.interval = setInterval(this.dec, 1000);
//}

//componentDidUpdate() {
	//si el componente padre se actualiza, tambien se activa etse metodo
	//console.log("componentDidUpdate");
  //}