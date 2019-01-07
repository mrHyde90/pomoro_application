import React from 'react';
import {View, Text} from 'react-native';

import {CardSection} from '../common/CardSection';
import {Input} from '../common/Input';

const WorkTimer = (props) => (
    <View>
        <Text>{props.label}</Text>
                <CardSection>
					<Input 
						label="Minutos"
						placeholder="59"
						value={props.valorMinutos}
						onChangeText={value => {props.putTime(value, props.MINUTOS)} }
					/>
				</ CardSection>

                <CardSection>
					<Input 
						label="Segundos"
						placeholder="59"
						value={props.valorSegundos}
						onChangeText={value => {props.putTime(value, props.SEGUNDOS)}}
					/>
				</ CardSection>
    </View>
);

export default WorkTimer;